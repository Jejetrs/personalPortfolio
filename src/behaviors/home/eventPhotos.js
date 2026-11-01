/* Previous-event photo evidence viewer (ported from the original inline page script). */
export function mountEventPhotos(scope) {
  // Event photo placeholders. Set a real, public-safe image path in each
  // data-photo-src attribute when original event photos become available.
  // Empty paths never trigger network requests or interactive image buttons.

    const slots = Array.from(document.querySelectorAll('#last-events [data-photo-key]'));
    const imagesByEvent = new Map();
    const lightbox = document.createElement('dialog');
    lightbox.className = 'event-proof-lightbox';
    lightbox.setAttribute('aria-label', 'Event documentation image viewer');
    lightbox.innerHTML = '<div class="event-proof-lightbox-top"><strong data-photo-view-title></strong><div class="event-proof-lightbox-actions"><button type="button" data-photo-view-prev aria-label="Previous event photo">‹</button><button type="button" data-photo-view-next aria-label="Next event photo">›</button><button type="button" data-photo-view-close aria-label="Close photo">×</button></div></div><img class="event-proof-lightbox-img" alt=""><p class="event-proof-lightbox-caption"></p>';
    scope.append(document.body, lightbox);
    const imageEl = lightbox.querySelector('img');
    const titleEl = lightbox.querySelector('[data-photo-view-title]');
    const captionEl = lightbox.querySelector('.event-proof-lightbox-caption');
    const prevEl = lightbox.querySelector('[data-photo-view-prev]');
    const nextEl = lightbox.querySelector('[data-photo-view-next]');
    let activeEvent = '', activeIndex = 0, priorFocus = null;

    function populated(event) { return imagesByEvent.get(event) || []; }
    function viewAt(index) {
      const group = populated(activeEvent);
      if (!group.length) return;
      activeIndex = (index + group.length) % group.length;
      const item = group[activeIndex];
      imageEl.src = item.image.currentSrc || item.image.src;
      imageEl.alt = item.image.alt;
      titleEl.textContent = item.button.dataset.photoTitle || 'Activity documentation';
      captionEl.textContent = item.button.dataset.photoCaption || '';
      prevEl.disabled = nextEl.disabled = group.length <= 1;
    }
    function close() { if (lightbox.open) lightbox.close(); }
    slots.forEach(button => {
      const src = (button.dataset.photoSrc || '').trim();
      if (!src) return;
      const img = button.querySelector('.event-proof-image');
      const gallery = button.dataset.photoGallery
        ? JSON.parse(button.dataset.photoGallery)
        : [{ src, title: button.dataset.photoTitle, caption: button.dataset.photoCaption }];
      let galleryIndex = 0;
      const setGalleryItem = item => {
        img.src = item.src;
        img.alt = item.title || '';
        button.dataset.photoTitle = item.title || '';
        button.dataset.photoCaption = item.caption || '';
      };
      const preloader = new Image();
      preloader.onload = () => {
        setGalleryItem(gallery[0]);
        img.hidden = false;
        button.disabled = false;
        button.classList.add('is-loaded');
        button.querySelector('.event-proof-placeholder')?.setAttribute('hidden', '');
        button.setAttribute('aria-label', 'Expand photo: ' + (button.dataset.photoTitle || 'Event documentation'));
        const key = button.dataset.eventPhoto;
        if (!imagesByEvent.has(key)) imagesByEvent.set(key, []);
        const group = imagesByEvent.get(key);
        group.push({button, image: img});
        group.sort((a,b) => Number(a.button.dataset.eventPhotoOrder)-Number(b.button.dataset.eventPhotoOrder));
        if (Number(button.dataset.eventPhotoOrder) === 0) {
          const idx = {digistar: 0, asah: 1, arkavidia: 2}[key];
          const cover = document.querySelector('#last-events .last-event-card[data-event-index="' + idx + '"]');
          if (cover) { const coverImg = cover.querySelector('.event-cover-real-image'); coverImg.src = src; coverImg.hidden = false; cover.classList.add('has-real-image'); }
        }
      };
      preloader.onerror = () => { img.hidden = true; button.disabled = true; };
      preloader.src = gallery[0].src;
      const advanceGallery = () => {
        galleryIndex = (galleryIndex + 1) % gallery.length;
        const item = gallery[galleryIndex];
        const nextImage = new Image();
        nextImage.onload = () => setGalleryItem(item);
        nextImage.onerror = () => { galleryIndex = (galleryIndex - 1 + gallery.length) % gallery.length; };
        nextImage.src = item.src;
      };
      button.parentElement.querySelector('[data-photo-next]')?.addEventListener('click', event => {
        event.stopPropagation();
        advanceGallery();
      });
      if (gallery.length > 1) {
        const autoplay = window.setInterval(advanceGallery, 4000);
        scope.add(() => window.clearInterval(autoplay));
      }
      button.addEventListener('click', () => {
        const group = populated(button.dataset.eventPhoto);
        const index = group.findIndex(entry => entry.button === button);
        if (index < 0) return;
        activeEvent = button.dataset.eventPhoto; priorFocus = button;
        viewAt(index); lightbox.showModal();
      });
    });
    prevEl.addEventListener('click', () => viewAt(activeIndex - 1));
    nextEl.addEventListener('click', () => viewAt(activeIndex + 1));
    lightbox.querySelector('[data-photo-view-close]').addEventListener('click', close);
    lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
    lightbox.addEventListener('close', () => { imageEl.removeAttribute('src'); priorFocus?.focus(); });
    scope.on(document, 'keydown', event => {
      if (!lightbox.open) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); viewAt(activeIndex - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); viewAt(activeIndex + 1); }
    });
}
