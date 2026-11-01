import HonorsCarouselTrack from './HonorsCarouselTrack.jsx';
import { scrollHonors } from '@/behaviors/home/interactionHandlers.js';

export default function HonorsCarouselViewport() {
  return (
    <div aria-label="Certificates Carousel" className="rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary/30" id="honors-carousel-viewport" role="region" tabIndex="0">
      <button aria-label="Previous certificate" className="absolute left-2 top-1/2 z-[1100] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/80 text-white shadow-lg backdrop-blur transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white/80" onClick={() => { scrollHonors(-1); }} type="button">
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>
      {" "}
      <button aria-label="Next certificate" className="absolute right-2 top-1/2 z-[1100] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/80 text-white shadow-lg backdrop-blur transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white/80" onClick={() => { scrollHonors(1); }} type="button">
        <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
      <HonorsCarouselTrack />
    </div>
  );
}
