import CompanyPanel2Part1 from './CompanyPanel2Part1.jsx';

export default function CompanyPanel2() {
  const facilitatorPhotos = [
    {
      file: "AI Class.webp",
      title: "AI Class Facilitation",
    },
    {
      file: "CAC-35 Profile.webp",
      title: "CAC-35 Cohort Profile",
    },
    {
      file: "English Class.webp",
      title: "English Class Facilitation",
    },
    {
      file: "Game Session.webp",
      title: "Cohort Game Session",
    },
    {
      file: "Guide Cohort to Practice Peer Review.webp",
      title: "Guiding Cohort Peer Review",
    },
    {
      file: "Reflection to Cohort.webp",
      title: "Reflection with the Cohort",
    },
    {
      file: "Schedulling Next Event.webp",
      title: "Scheduling the Next Event",
    },
    {
      file: "Soft Skill Class.webp",
      title: "Soft Skill Class Facilitation",
    },
  ];

  return (
    <section className="company-stage space-y-6 hidden" id="company-panel-2">
      <p className="wk-lead">
        <span>
          {"Coaching 20+ learners through an ML capstone taught me to explain, not just to do."}
          <small>Coding Camp 2026 · 87.5% graduation rate · 4.95 average feedback</small>
        </span>
      </p>
      <div className="work-hero relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50/70 to-cyan-50/50 p-5 md:p-6 shadow-sm">
        <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border-[24px] border-indigo-100/40" aria-hidden="true"></div>
        <div className="work-hero-grid relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
          <div className="work-hero-main flex min-w-0 flex-col gap-3 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-ping"></span>
                Jan – Mar 2026
              </span>
              {" "}
              <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white/85 px-3 py-1 text-[10px] font-semibold text-indigo-800">
                <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                  location_on
                </span>
                Online
              </span>
            </div>
            <div className="min-w-0 space-y-1">
              <h2 className="text-xl font-extrabold leading-snug tracking-tight text-[#131b2e] sm:text-2xl">
                Coding Camp Powered by DBS Foundation 2026
              </h2>
              <p className="text-sm font-bold leading-snug text-indigo-700">
                Facilitator — AI Learning Path
              </p>
            </div>
            <p className="max-w-2xl text-[13px] leading-relaxed text-slate-600">
              Supported a cohort of 20+ participants through the AI Learning Path with technical guidance, progress monitoring, and capstone completion. Guided end-to-end ML workflows, from data preprocessing and EDA to feature engineering, evaluation, and deployment.
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-1.5 border-t border-indigo-100 pt-3">
              <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {"Skills & Tools"}
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Python
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Machine Learning
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                TensorFlow
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                PyTorch
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Colab · Kaggle
              </span>
              <span className="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">
                Miro
              </span>
            </div>
          </div>
          <div className="work-hero-side flex min-w-0 flex-col rounded-2xl bg-[#17234a] p-4 text-white shadow-lg shadow-indigo-950/10 lg:col-span-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">
                Experience Snapshot
              </span>
              <span className="material-symbols-outlined text-xl text-indigo-200" aria-hidden="true">
                psychology
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
              <span className="text-3xl font-black tracking-tight">
                20+
              </span>
              <span className="text-xs text-indigo-100">
                participants facilitated
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-indigo-100">
              Technical Guidance · Progress Monitoring · Program Coordination
            </p>
            <div className="mt-auto border-t border-white/20 pt-3">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined shrink-0 text-lg text-amber-300" aria-hidden="true">
                  verified
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug">
                    AI Learning Path Facilitator
                  </p>
                  <p className="text-[11px] text-indigo-200">
                    Online · Jan – Mar 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">
              photo_library
            </span>
            <h3 className="text-body-md font-bold text-on-surface uppercase tracking-wider font-label-kicker">
              DBS CODING CAMP FACILITATION
            </h3>
          </div>
        </div>
        <div className="relative w-full aspect-[16/9] md:aspect-[21/10] overflow-hidden rounded-xl" id="dbs-documentation-carousel">
          {facilitatorPhotos.map((photo, index) => (
            <div
              className={`dbs-documentation-slide group/frame absolute inset-0 overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container shadow-inner transition-opacity duration-500 ease-in-out ${index === 0 ? 'z-10 opacity-100' : 'z-0 pointer-events-none opacity-0'}`}
              data-documentation-slide=""
              key={photo.file}
            >
              <img alt={`${photo.title} - Coding Camp Powered by DBS Foundation 2026`} className="h-full w-full object-cover" src={`/assets/experience/Coding%20Camp%202026%20Facilitator/${encodeURIComponent(photo.file).replace(/%2F/g, "/")}`} />
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between gap-3 font-label-code text-xs text-surface-container-lowest">
                <span className="max-w-[55%] shrink-0 truncate rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
          <button aria-label="Previous documentation image" className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-on-surface/50 text-surface-container-lowest backdrop-blur-md transition-all hover:bg-primary" data-dbs-carousel-direction="-1" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chevron_left</span>
          </button>
          <button aria-label="Next documentation image" className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-on-surface/50 text-surface-container-lowest backdrop-blur-md transition-all hover:bg-primary" data-dbs-carousel-direction="1" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chevron_right</span>
          </button>
          <div className="absolute bottom-11 left-0 right-0 z-20 flex justify-center gap-1.5">
            {facilitatorPhotos.map((photo, index) => (
              <button
                aria-label={`Show documentation image ${index + 1}`}
                aria-current={index === 0}
                className={`dbs-documentation-dot h-2 rounded-full transition-all ${index === 0 ? 'w-4 bg-surface-container-lowest' : 'w-2 bg-surface-container-lowest/60'}`}
                data-dbs-slide-index={index}
                key={photo.file}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
      <CompanyPanel2Part1 />
      <section className="cert-card" aria-labelledby="facilitator-cert-title">
        <div className="cert-card-badge" aria-hidden="true">
          <span className="material-symbols-outlined">workspace_premium</span>
        </div>
        <div className="cert-card-body">
          <p className="cert-card-eyebrow">Certificate &amp; Recognition</p>
          <h3 id="facilitator-cert-title">Facilitator Certificate, AI Learning Path</h3>
          <p>
            Issued for guiding a cohort of 20+ participants through the AI Learning Path of Coding Camp powered by DBS Foundation 2026.
            It recognises the facilitator role itself: technical guidance, progress monitoring and support through capstone completion.
          </p>
          <ul className="cert-card-points">
            <li><strong>Role</strong> Facilitator, AI Learning Path</li>
            <li><strong>Period</strong> Jan – Mar 2026, online</li>
            <li><strong>Outcome</strong> 87.5% graduation rate, 4.95 average biweekly feedback</li>
          </ul>
        </div>
        <button type="button" className="cert-card-btn" data-certificate-key="company-panel-2">
          <span className="material-symbols-outlined" aria-hidden="true">visibility</span>
          View certificate
        </button>
      </section>

    </section>
  );
}
