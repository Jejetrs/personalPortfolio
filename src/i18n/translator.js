/*
 * DOM translator.
 *
 * The portfolio's copy lives in React components *and* in DOM-driven behavior modules, so instead of
 * threading a t() call through every string, this module swaps text nodes and a few attributes using
 * the English -> Indonesian dictionary in ./id.js.
 *
 *  - Only text nodes / attributes are touched (never element structure), so React and the behavior
 *    modules keep working with the nodes they already hold.
 *  - The English original of every changed node is remembered, so switching back is lossless.
 *  - A MutationObserver translates anything rendered or rewritten later (tabs, panels, typed text...).
 *  - Strings missing from the dictionary are left in English on purpose.
 */
import ID_DICTIONARY from "./id.js";
import ID_PATTERNS from "./patterns.js";

const ATTRIBUTES = ["aria-label", "title", "placeholder", "alt"];
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "CODE", "PRE"]);
const ATTRIBUTE_SELECTOR = ATTRIBUTES.map((name) => `[${name}]`).join(",");

const dictionary = new Map(Object.entries(ID_DICTIONARY));
const textRecords = new WeakMap(); // Text node -> { original, shown }
const attrRecords = new WeakMap(); // Element -> { [attribute]: { original, shown } }

let language = "en";
let observer = null;

export const normalize = (value) => value.replace(/[\s ]+/g, " ").trim();

/** Translate one string for the current language (returns the input when nothing matches). */
export function translate(value) {
  if (language !== "id" || typeof value !== "string") return value;
  const result = lookup(value);
  return result == null ? value : result;
}

function lookup(raw) {
  const core = normalize(raw);
  if (!core) return null;
  let hit = dictionary.get(core);
  if (hit == null) {
    for (const [pattern, build] of ID_PATTERNS) {
      const match = core.match(pattern);
      if (match) {
        hit = build(...match.slice(1).map((part) => (part === undefined ? part : lookup(part) ?? part)));
        break;
      }
    }
  }
  if (hit == null) return null;
  const lead = raw.match(/^[\s ]*/)[0];
  const trail = raw.match(/[\s ]*$/)[0];
  return lead + hit + trail;
}

const skipped = (element) =>
  !element || SKIP_TAGS.has(element.tagName) || Boolean(element.closest?.('[translate="no"],.notranslate'));

/* Attributes (aria-label, title…) are translated everywhere except inside translate="no" areas; only the text of code blocks is left alone. */
const noTranslate = (element) => !element || Boolean(element.closest?.('[translate="no"],.notranslate'));

function processText(node) {
  const record = textRecords.get(node);
  const current = node.nodeValue;
  if (record && current === record.shown) return; // our own write
  if (skipped(node.parentElement) || node.parentElement.closest("pre,code")) return;
  const next = language === "id" ? lookup(current) : null;
  if (next != null && next !== current) {
    textRecords.set(node, { original: current, shown: next });
    node.nodeValue = next;
  } else if (record) {
    textRecords.delete(node);
  }
}

function processAttribute(element, name) {
  if (noTranslate(element)) return;
  const current = element.getAttribute(name);
  if (current == null) return;
  const records = attrRecords.get(element) || {};
  const record = records[name];
  if (record && current === record.shown) return;
  const next = language === "id" ? lookup(current) : null;
  if (next != null && next !== current) {
    records[name] = { original: current, shown: next };
    attrRecords.set(element, records);
    element.setAttribute(name, next);
  } else if (record) {
    delete records[name];
  }
}

function processTree(root) {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    processText(root);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  if (noTranslate(root) && root.tagName !== "TITLE") return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    processText(node);
    node = walker.nextNode();
  }
  const withAttributes = [root, ...root.querySelectorAll(ATTRIBUTE_SELECTOR)];
  for (const element of withAttributes) {
    for (const name of ATTRIBUTES) if (element.hasAttribute?.(name)) processAttribute(element, name);
  }
}

function restoreTree(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const record = textRecords.get(node);
    if (record) {
      if (node.nodeValue === record.shown) node.nodeValue = record.original;
      textRecords.delete(node);
    }
    node = walker.nextNode();
  }
  for (const element of root.querySelectorAll(ATTRIBUTE_SELECTOR)) {
    const records = attrRecords.get(element);
    if (!records) continue;
    for (const [name, record] of Object.entries(records)) {
      if (element.getAttribute(name) === record.shown) element.setAttribute(name, record.original);
    }
    attrRecords.delete(element);
  }
}

function handleMutations(mutations) {
  for (const mutation of mutations) {
    if (mutation.type === "characterData") processText(mutation.target);
    else if (mutation.type === "attributes") processAttribute(mutation.target, mutation.attributeName);
    else mutation.addedNodes.forEach(processTree);
  }
}

function startObserving() {
  if (observer || typeof MutationObserver === "undefined") return;
  observer = new MutationObserver(handleMutations);
  const options = { subtree: true, childList: true, characterData: true };
  observer.observe(document.head, options);
  observer.observe(document.body, { ...options, attributes: true, attributeFilter: ATTRIBUTES });
}

function stopObserving() {
  observer?.disconnect();
  observer = null;
}

export function getLanguage() {
  return language;
}

/** Switch the whole document. Safe to call repeatedly. */
export function setLanguage(next) {
  language = next === "id" ? "id" : "en";
  document.documentElement.lang = language;
  if (language === "id") {
    processTree(document.head.querySelector("title"));
    processTree(document.body);
    startObserving();
  } else {
    stopObserving();
    restoreTree(document.head);
    restoreTree(document.body);
  }
  window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language } }));
}

/** textContent of an element as it was written in English (behavior code matches on English wording). */
export function originalText(element) {
  if (!element) return "";
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let text = "";
  let node = walker.nextNode();
  while (node) {
    const record = textRecords.get(node);
    text += record && node.nodeValue === record.shown ? record.original : node.nodeValue;
    node = walker.nextNode();
  }
  return text;
}

if (typeof window !== "undefined") {
  window.portfolioI18n = { translate, originalText, getLanguage };
}
