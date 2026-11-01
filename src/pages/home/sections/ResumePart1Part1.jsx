import HonorsCarouselViewport from './HonorsCarouselViewport.jsx';
import { goToHonorsSlide } from '@/behaviors/home/interactionHandlers.js';

export default function ResumePart1Part1() {
  return (
    <div className="relative px-2 sm:px-4">
      <HonorsCarouselViewport />
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-indigo-100/70">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-500" id="honors-card-counter">
            1 of 8 Achievements
          </span>
        </div>
        <div className="flex items-center gap-2" id="honors-dot-indicators">
          <button aria-label="Go to certificate 1" className="h-2 rounded-full transition-all duration-300 w-7 bg-primary shadow-sm shadow-indigo-600/40 ring-2 ring-primary/20 scale-105" onClick={() => { goToHonorsSlide(0); }}></button>
          {" "}
          <button aria-label="Go to certificate 2" className="h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer" onClick={() => { goToHonorsSlide(1); }}></button>
          {" "}
          <button aria-label="Go to certificate 3" className="h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer" onClick={() => { goToHonorsSlide(2); }}></button>
          {" "}
          <button aria-label="Go to certificate 4" className="h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer" onClick={() => { goToHonorsSlide(3); }}></button>
          {" "}
          <button aria-label="Go to certificate 5" className="h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer" onClick={() => { goToHonorsSlide(4); }}></button>
          {" "}
          <button aria-label="Go to certificate 6" className="h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer" onClick={() => { goToHonorsSlide(5); }}></button>
          {" "}
          <button aria-label="Go to certificate 7" className="h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer" onClick={() => { goToHonorsSlide(6); }}></button>
          {" "}
          <button aria-label="Go to certificate 8" className="h-2 rounded-full transition-all duration-300 w-2.5 bg-indigo-200 hover:bg-indigo-300 hover:w-3 cursor-pointer" onClick={() => { goToHonorsSlide(7); }}></button>
        </div>
      </div>
    </div>
  );
}
