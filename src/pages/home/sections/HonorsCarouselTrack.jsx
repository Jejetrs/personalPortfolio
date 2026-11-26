const TRAINING_CERTIFICATES = [
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    credential: "INTERACTIVE FRONT-END",
    date: "SEP 2025 – SEP 2028",
    description: "Built interactive web interfaces with DOM manipulation, browser events, and Web Storage, then applied them in a final project.",
    src: "/assets/certificate/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula.pdf",
  },
  {
    title: "Belajar Fundamental Aplikasi Web dengan React",
    credential: "REACT DEVELOPMENT",
    date: "OCT 2025 – OCT 2028",
    description: "Built a React app using reusable components, prop validation, routing, lifecycle methods, Context, and Hooks.",
    src: "/assets/certificate/Belajar%20Fundamental%20Aplikasi%20Web%20dengan%20React.pdf",
  },
  {
    title: "Belajar Fundamental Back-End dengan JavaScript",
    credential: "BACK-END DEVELOPMENT",
    date: "DEC 2025 – DEC 2028",
    description: "Designed secure REST APIs with JavaScript, PostgreSQL, validation, authentication, messaging, storage, and caching.",
    src: "/assets/certificate/Belajar%20Fundamental%20Back-End%20dengan%20JavaScript.pdf",
  },
  {
    title: "Membangun Sistem Machine Learning",
    credential: "MACHINE LEARNING OPS",
    date: "OCT 2025 – OCT 2028",
    description: "Built reliable ML workflows with MLflow, GitHub, and Docker, covering data preparation, retraining, serving, and monitoring.",
    src: "/assets/certificate/Membangun%20Sistem%20Machine%20Learning.pdf",
  },
  {
    title: "Belajar Pengembangan Machine Learning",
    credential: "DEEP LEARNING",
    date: "APR 2025 – APR 2028",
    description: "Practiced deep learning with TensorFlow and Keras across NLP, time series, image classification, and recommendation systems.",
    src: "/assets/certificate/sertifikat_course_Belajar%20Pengembangan%20Machine%20Learning.pdf",
  },
  {
    title: "Machine Learning Terapan",
    credential: "APPLIED MACHINE LEARNING",
    date: "MAY 2025 – MAY 2028",
    description: "Applied predictive analytics, sentiment analysis, computer vision, and recommendation methods to practical use cases.",
    src: "/assets/certificate/sertifikat_course_Machine%20Learning%20Terapan.pdf",
  },
  {
    title: "Belajar Analisis Data dengan Python",
    credential: "PYTHON DATA ANALYSIS",
    date: "MAR 2025 – MAR 2028",
    description: "Used Python for data cleaning, descriptive statistics, EDA, visualization, and an interactive Streamlit dashboard.",
    src: "/assets/certificate/Jessica%20Theresia_Belajar%20Analisis%20Data%20dengan%20Python.pdf",
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    credential: "SQL FUNDAMENTALS",
    date: "FEB 2025 – FEB 2028",
    description: "Practiced relational database concepts and core SQL for structuring, querying, inserting, updating, and deleting data.",
    src: "/assets/certificate/Jessica%20Theresia_Belajar%20Dasar%20Structured%20Query%20Language%20(SQL).pdf",
  },
  {
    title: "Belajar Fundamental Pemrosesan Data",
    credential: "DATA PROCESSING",
    date: "MAY 2025 – MAY 2028",
    description: "Prepared reliable datasets with Python, data repositories, ETL pipelines, data cleaning, and workflow automation.",
    src: "/assets/certificate/sertifikat_course_Belajar%20Fundamental%20Pemrosesan%20Data.pdf",
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    credential: "DATA VISUALIZATION",
    date: "FEB 2025 – FEB 2028",
    description: "Learned to prepare data, choose effective charts, and use visual storytelling in Google Sheets to communicate insights.",
  },
];

export default function HonorsCarouselTrack() {
  return (
    <div id="honors-carousel-track">
      <article aria-label="Digistar Class Internship 2026, Top 3 Pitching" data-certificate="/assets/certificate/DCI2026.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Digistar Class Internship 2026
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - Designer Intern -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 border border-amber-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-purple-700">
              TELKOM INDONESIA
            </span>
            {" "}
            <span className="text-base font-black text-slate-800 mt-3">
              TOP 3 PITCHING
            </span>
            {" "}
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              AUG 2026
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Throughout my Designer Internship, I contributed to design system improvements, product design, and team collaboration while developing my technical, analytical, and professional skills.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-purple-700">
              TELKOM INDONESIA
            </span>
            <span>
              AUG 2026
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Digistar Class Intern 2026 B2B Pitching, 3rd Place" data-certificate="/assets/certificate/DCI%20B2B.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Digistar Class Intern 2026 · B2B
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - 3rd Place · Pitching Competition -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 border border-amber-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-purple-700">
              TELKOM INDONESIA
            </span>
            {" "}
            <span className="text-base font-black text-slate-800 mt-3">
              3RD PLACE · B2B PITCHING
            </span>
            {" "}
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              AUG 2026
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Led team meetings and coordinated team activities throughout the project. Represented the team during the final pitching, presenting the project and its key solutions to stakeholders.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-purple-700">
              B2B PITCHING
            </span>
            <span>
              AUG 2026
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Coding Camp 2026 Facilitator" data-certificate="/assets/certificate/Coding%20Camp%202026%20Facilitator.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Coding Camp 2026
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - Facilitator -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-100 border border-indigo-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-700">
              CODING CAMP
            </span>
            <span className="text-base font-black text-slate-800 mt-3">
              FACILITATOR
            </span>
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              2026
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Facilitated learning sessions and supported participants throughout the Coding Camp 2026 program.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-indigo-700">
              FACILITATOR
            </span>
            <span>
              2026
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Asah led by Dicoding and Accenture, Distinction Award" data-certificate="/assets/certificate/ASAH%202025.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            {"Asah led by Dicoding & Accenture"}
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - Distinction Award -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-100 border border-blue-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-blue-800">
              DICODING × ACCENTURE
            </span>
            {" "}
            <span className="text-base font-black text-slate-800 mt-3">
              DISTINCTION
            </span>
            {" "}
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              JAN 2026
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Graduated with Distinction in the React &amp; Back-End with AI path; led the LeadSight capstone as Project Lead and Front-End Developer.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-blue-700">
              DISTINCTION
            </span>
            <span>
              JAN 2026
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Digistar Class 2024 by Telkom, Top 2 Best Team Project" data-certificate="/assets/certificate/DCI2024.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            DIGISTAR CLASS 2024 BY TELKOM
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - Top 2 Best Team Project -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-rose-50 via-orange-50 to-red-100 border border-red-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-red-700">
              TELKOM
            </span>
            {" "}
            <span className="text-base font-black text-slate-800 mt-3">
              TOP 2 BEST TEAM PROJECT
            </span>
            {" "}
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              OCT 2024
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Led UX research and interface design, designed a high-impact product solution through research-driven UX and strong team collaboration.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-red-700">
              TOP 2 NATIONWIDE
            </span>
            <span>
              OCT 2024
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Hackvidia 9.0 Arkavidia ITB, Finalist" data-certificate="/assets/certificate/Arkavidia%209.0%20Finalist.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Hackvidia 9.0 (Arkavidia ITB)
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - Finalist -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 border border-indigo-700 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-300">
              ITB BANDUNG
            </span>
            {" "}
            <span className="text-base font-black text-amber-300 mt-3">
              Finalist
            </span>
            {" "}
            <span className="text-[10px] font-mono text-indigo-200 mt-2">
              MAY 2025
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Top 10 finalist with AiDorse, an AI-powered MSME endorsement platform built in a 24-hour hackathon. Contributed to UI/UX design and user research.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-indigo-700">
              ARKAVIDIA ITB
            </span>
            <span>
              MAY 2025
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Coding Camp DBS Foundation 2025, ML Engineer Graduate" data-certificate="/assets/certificate/CC%202025.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Coding Camp DBS Foundation 2025
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - ML Engineer Graduate -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-rose-50 via-red-50 to-orange-100 border border-red-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-red-700">
              DBS FOUNDATION
            </span>
            {" "}
            <span className="text-base font-black text-slate-800 mt-3">
              ML ENGINEER
            </span>
            {" "}
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              FEB 2025
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Selected as a Machine Learning Engineer cohort, gaining hands-on experience in data analysis, model deployment, and real-world AI implementation.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-red-600">
              DBS FOUNDATION
            </span>
            <span>
              FEB 2025
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Samsung Innovation Campus Batch 5, Finalist" data-certificate="/assets/certificate/SIC%20Finalist.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Samsung Innovation Campus Batch 5
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - Finalist -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 border border-blue-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-blue-900">
              SAMSUNG CAMPUS
            </span>
            {" "}
            <span className="text-base font-black text-slate-800 mt-3">
              FINALIST
            </span>
            {" "}
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              SEP 2024
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            {"Developed AgroSense, an IoT & AI-based hydroponic health monitoring system, integrating technical edge hardware with real-world agricultural impact."}
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-blue-900">
              SAMSUNG CAMPUS
            </span>
            <span>
              SEP 2024
            </span>
          </div>
        </div>
      </article>
      <article aria-label="KOMPRES15 Machine Learning, 2nd Place Winner" data-certificate="/assets/certificate/KOMPRES15.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            KOMPRES15 Machine Learning
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - 2nd Place Winner -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 border border-emerald-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-700">
              UG ML
            </span>
            {" "}
            <span className="text-base font-black text-slate-800 mt-3">
              2ND PLACE WINNER
            </span>
            {" "}
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              MAY 2024
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Part of the core team developing Greenergy.ai, a smart monitoring system focused on optimizing hydroponic energy and water consumption efficiency.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-emerald-700">
              NATIONAL JUARA 2
            </span>
            <span>
              MAY 2024
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Fundamental Web Programming, University of Gunadarma, August 2023" data-certificate="/assets/certificate/FUNDAMENTAL%20WEB%20PROGRAMMING.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Fundamental Web Programming
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - Certificate of Training -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100 border border-sky-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-sky-800">
              UNIVERSITAS GUNADARMA
            </span>
            <span className="text-base font-black text-slate-800 mt-3">
              WEB PROGRAMMING
            </span>
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              AUG 2023
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Completed training in fundamental web programming, covering the core concepts used to build websites.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-sky-800">
              GUNADARMA
            </span>
            <span>
              AUG 2023
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Data Science Course, First Case, University of Gunadarma, September 2025" data-certificate="/assets/certificate/Datascience%20Case.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Data Science Course
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - First & Second Case -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 border border-purple-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-purple-800">
              UNIVERSITAS GUNADARMA
            </span>
            <span className="text-base font-black text-slate-800 mt-3">
              DATA SCIENCE
            </span>
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              SEP 2025
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Completed the first and second Data Science course cases, applying data science concepts to practical case studies.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-purple-800">
              GUNADARMA
            </span>
            <span>
              SEP 2025
            </span>
          </div>
        </div>
      </article>
      <article aria-label="Go-Lang for Intermediate, University of Gunadarma, February 2025" data-certificate="/assets/certificate/GO-LANG%20FOR%20INTERMEDIATE.pdf" className="honor-card bg-white rounded-[26px] p-4 border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-[#131b2e] text-sm sm:text-base text-center leading-tight">
            Go-Lang for Intermediate
          </h3>
          <p className="text-xs font-semibold text-slate-600 text-center mt-1">
            - Certificate of Training -
          </p>
          <div className="h-36 rounded-2xl bg-gradient-to-br from-teal-50 via-emerald-50 to-green-100 border border-emerald-200 p-0 flex flex-col items-center justify-center text-center mt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800">
              UNIVERSITAS GUNADARMA
            </span>
            <span className="text-base font-black text-slate-800 mt-3">
              GO · INTERMEDIATE
            </span>
            <span className="text-[10px] font-mono text-slate-600 mt-2">
              FEB 2025
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-3">
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Completed intermediate-level Go programming training, building on core language and programming concepts.
          </p>
          <div className="flex items-center justify-between text-[10px] font-mono border-t border-slate-200 pt-2 text-slate-600">
            <span className="font-bold text-emerald-800">
              GUNADARMA
            </span>
            <span>
              FEB 2025
            </span>
          </div>
        </div>
      </article>
      {TRAINING_CERTIFICATES.map((certificate) => (
        <article
          aria-label={`${certificate.title}, Dicoding course certificate`}
          className="honor-card flex flex-col justify-between rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          data-certificate={certificate.src}
          key={certificate.title}
        >
          <div>
            <h3 className="text-center text-sm font-extrabold leading-tight text-[#131b2e] sm:text-base">
              {certificate.title}
            </h3>
            <p className="mt-1 text-center text-xs font-semibold text-slate-600">
              - Course Certificate -
            </p>
            <div className="mt-4 flex h-36 flex-col items-center justify-center rounded-2xl border border-indigo-200 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-center">
              <span className="font-mono text-[10px] font-bold tracking-widest text-indigo-700">
                DICODING
              </span>
              <span className="mt-3 text-sm font-black text-slate-800">
                {certificate.credential}
              </span>
              <span className="mt-2 font-mono text-[10px] text-slate-600">
                {certificate.date.split(" – ")[0]}
              </span>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-[11px] leading-relaxed text-slate-600">
              {certificate.description}
            </p>
            <div className="flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[9px] text-slate-600">
              <span className="font-bold text-indigo-700">DICODING</span>
              <span>{certificate.date}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
