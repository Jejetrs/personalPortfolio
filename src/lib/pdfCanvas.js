/* PDF canvas */

const MAX_CANVAS_PIXELS = 12_000_000;

let pdfjsPromise;

function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = Promise.all([
      import('pdfjs-dist/legacy/build/pdf.min.mjs'),
      import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'),
    ]).then(([lib, worker]) => {
      lib.GlobalWorkerOptions.workerSrc = worker.default;
      return lib;
    });
  }
  return pdfjsPromise;
}

function absoluteUrl(url) {
  return new URL(url, window.location.href).href;
}

function showMessage(container, url, text) {
  const box = document.createElement('div');
  box.className = 'pdf-canvas-message';
  box.append(document.createTextNode(text));
  if (url) {
    const link = document.createElement('a');
    link.href = absoluteUrl(url);
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Open PDF';
    box.append(link);
  }
  container.replaceChildren(box);
}

export function renderPdf(container, url, { mode = 'pages' } = {}) {
  let cancelled = false;
  let task = null;

  container.classList.add('pdf-canvas-host');
  container.dataset.pdfMode = mode;
  showMessage(container, null, 'Loading PDF…');

  const ready = (async () => {
    try {
      const pdfjs = await loadPdfjs();
      task = pdfjs.getDocument({ url: absoluteUrl(url) });
      const doc = await task.promise;
      if (cancelled) return;

      container.replaceChildren();
      const pageCount = mode === 'contain' ? 1 : doc.numPages;

      for (let number = 1; number <= pageCount; number += 1) {
        const page = await doc.getPage(number);
        if (cancelled) return;

        const base = page.getViewport({ scale: 1 });
        const boxWidth = container.clientWidth || 320;
        const boxHeight = container.clientHeight || 0;
        let cssWidth = boxWidth;
        if (mode === 'contain' && boxHeight) {
          cssWidth = Math.min(boxWidth, (boxHeight * base.width) / base.height);
        }

        let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        const cssHeight = (cssWidth * base.height) / base.width;
        const pixels = cssWidth * pixelRatio * cssHeight * pixelRatio;
        if (pixels > MAX_CANVAS_PIXELS) pixelRatio *= Math.sqrt(MAX_CANVAS_PIXELS / pixels);

        const viewport = page.getViewport({ scale: (cssWidth * pixelRatio) / base.width });
        const canvas = document.createElement('canvas');
        canvas.className = 'pdf-canvas-page';
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.aspectRatio = `${base.width} / ${base.height}`;
        if (mode === 'contain') canvas.style.width = `${cssWidth}px`;
        container.append(canvas);

        await page.render({ canvas, canvasContext: canvas.getContext('2d'), viewport }).promise;
      }
    } catch (error) {
      if (!cancelled) showMessage(container, url, 'This PDF could not be displayed here. ');
    }
  })();

  return {
    ready,
    destroy() {
      cancelled = true;
      task?.destroy();
      container.replaceChildren();
    },
  };
}
