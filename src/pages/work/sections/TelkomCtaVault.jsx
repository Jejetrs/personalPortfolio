import { changeSlide, setSlide } from '@/behaviors/work.js';

const CTA_PHOTOS = [
  ['Selfie2.jpg', 'Team selfie'],
  ['Name Tag.jpg', 'First day essentials'],
  ['On Boarding Day.jpg', 'Onboarding Day'],
  ['Intern DDP.jpg', 'Intern DDP'],
  ['Inaproc Progress.jpg', 'INAPROC progress'],
  ['Selfie.jpg', 'Team moment'],
  ['Sport Day.webp', 'Sport Day'],
  ['Last Day with Intern DDP.png', 'Last day with Intern DDP'],
];

const assetUrl = (file) => `/assets/experience/Telkom%20Designer%20Intern/CTA/${encodeURIComponent(file).replace(/%2F/g, '/')}`;

export default function TelkomCtaVault() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
            photo_library
          </span>
          <h3 className="text-body-md font-bold text-on-surface uppercase tracking-wider font-label-kicker">
            TELKOM DOCUMENTATION VAULT
          </h3>
        </div>
        <span className="text-[10px] font-semibold text-on-surface-variant font-label-code">
          {CTA_PHOTOS.length} photos
        </span>
      </div>
      <div className="relative w-full aspect-[16/9] md:aspect-[21/10] bg-surface-container rounded-xl border border-outline-variant/50 overflow-hidden shadow-inner">
        {CTA_PHOTOS.map(([file, title], index) => (
          <div
            className={`slide-item-5 absolute inset-0 transition-opacity duration-500 flex flex-col ${index === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            key={file}
          >
            <img
              alt={`${title} at Telkom Indonesia`}
              className="w-full h-full object-cover"
              decoding="async"
              loading={index === 0 ? 'eager' : 'lazy'}
              src={assetUrl(file)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between gap-3 text-surface-container-lowest font-label-code text-xs">
              <span className="min-w-0 truncate font-semibold">{file}</span>
              <span className="shrink-0 rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold">{title}</span>
            </div>
          </div>
        ))}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-on-surface/50 hover:bg-primary text-surface-container-lowest backdrop-blur-md flex items-center justify-center transition-all z-20"
          type="button"
          aria-label="Previous Telkom documentation image"
          onClick={() => changeSlide(5, -1)}
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chevron_left</span>
        </button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-on-surface/50 hover:bg-primary text-surface-container-lowest backdrop-blur-md flex items-center justify-center transition-all z-20"
          type="button"
          aria-label="Next Telkom documentation image"
          onClick={() => changeSlide(5, 1)}
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chevron_right</span>
        </button>
        <div className="absolute bottom-11 left-0 right-0 flex justify-center gap-1.5 z-10">
          {CTA_PHOTOS.map(([file], index) => (
            <button
              className={`dot-5 h-2 rounded-full transition-all cursor-pointer ${index === 0 ? 'bg-surface-container-lowest w-4' : 'bg-surface-container-lowest/40 w-2'}`}
              key={file}
              type="button"
              aria-label={`Show Telkom documentation image ${index + 1}`}
              onClick={() => setSlide(5, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
