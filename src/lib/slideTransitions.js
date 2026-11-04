const imageAnimations = new WeakMap();
const imageRequests = new WeakMap();

export function fadeInSlide(element) {
  if (!element?.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  element.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 500, easing: 'ease-in-out' }
  );
}

export function transitionImageSource(image, src, alt = '') {
  if (!image || !src) return;
  if (image.getAttribute('src') === src) {
    image.alt = alt;
    return;
  }

  const request = (imageRequests.get(image) || 0) + 1;
  imageRequests.set(image, request);
  imageAnimations.get(image)?.cancel();
  image.style.opacity = '';

  let committed = false;
  const commit = () => {
    if (committed) return;
    committed = true;
    if (imageRequests.get(image) !== request || !image.isConnected) return;
    image.alt = alt;
    if (!image.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      image.src = src;
      return;
    }

    const fadeOut = image.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 200, easing: 'ease-in', fill: 'forwards' }
    );
    imageAnimations.set(image, fadeOut);
    fadeOut.onfinish = () => {
      if (imageRequests.get(image) !== request || !image.isConnected) return;
      image.src = src;
      const fadeIn = image.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 300, easing: 'ease-out', fill: 'forwards' }
      );
      imageAnimations.set(image, fadeIn);
      fadeIn.onfinish = () => {
        if (imageRequests.get(image) !== request) return;
        fadeIn.cancel();
        image.style.opacity = '';
        imageAnimations.delete(image);
      };
    };
  };

  const preload = new Image();
  preload.onload = commit;
  preload.onerror = () => console.error(`Unable to load slideshow image: ${src}`);
  preload.src = src;
  if (preload.complete && preload.naturalWidth > 0) commit();
}
