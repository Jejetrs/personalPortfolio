// Writes the status file consumed by the portfolio's live-project indicators.
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const URLS = ['https://predictive-analytic-diabetes.streamlit.app/', 'https://bike-rental-analysis-dashboard.streamlit.app/', 'https://nusca.vercel.app/', 'https://jnotes-application.vercel.app/login', 'https://smartfocus.up.railway.app'];
const BAD = /(\b404\b|\b50[0-4]\b|not[_ -]?found|could not be found|doesn'?t exist|application (error|failed|not found)|bad gateway|service unavailable|internal server error|something went wrong|has been (deleted|disabled|suspended)|deployment_)/i;
async function check(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000), redirect: 'follow' });
    if (!res.ok) return false;
    const html = await res.text();
    const title = (/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html) || [])[1]?.trim() || '';
    const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const hasApp = /id=["'](root|__next|app)["']|<app-root|data-reactroot|<script[^>]+src=/i.test(html);
    if (BAD.test(title)) return false;
    if (text.length < 400 && BAD.test(text)) return false;
    if (/^[-–—_.\s]*$/.test(text) && !hasApp) return false;
    return true;
  } catch { return false; }
}
const checked = new Date().toISOString();
const results = await Promise.all(URLS.map(async (url) => [url, { active: await check(url), checked }]));
const out = Object.fromEntries(results);
const outputPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'live-status.json');
writeFileSync(outputPath, JSON.stringify(out, null, 2));
console.log(out);
