import HonorsCarouselViewport from './HonorsCarouselViewport.jsx';
import { goToHonorsSlide } from '@/behaviors/home/interactionHandlers.js';

export default function ResumePart1Part1() {
  return (
    <div className="relative px-2 sm:px-4">
      <HonorsCarouselViewport />
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-indigo-100/70">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-500" id="honors-card-counter">
            1 of 12 Achievements
          </span>
        </div>
        <div className="flex items-center gap-2" id="honors-dot-indicators">
          {Array.from({ length: 12 }, (_, index) => (
            <button
              key={index}
              aria-label={`Go to certificate ${index + 1}`}
              className={index === 0
                ? 'h-2 rounded-full transition-all duration-300 w-7 bg-primary shadow-sm shadow-indigo-600/40 ring-2 ring-primary/20 scale-105'
                : 'h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer'}
              onClick={() => { goToHonorsSlide(index); }}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
