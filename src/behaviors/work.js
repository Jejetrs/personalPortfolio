/* Work and training */

import { renderPdf } from '@/lib/pdfCanvas.js';
import { renderTrainingEvidence, bindTrainingEvidence } from './trainingEvidence.js';

const CERTIFICATE_FILES = {
  'company-panel-1': { title: 'PT Telekomunikasi Indonesia — Magang Generasi Bertalenta', url: '/assets/certificate/DCI2026.pdf' },
  'company-panel-2': { title: 'Coding Camp powered by DBS Foundation 2026 — Facilitator', type: 'images', urls: ['/assets/certificate/Coding%20Camp%202026%20Facilitator%20sertif1.webp', '/assets/certificate/Coding%20Camp%202026%20Facilitator%20sertif2.webp'] },
  'training-1': { title: 'Asah led by Dicoding × Accenture', url: '/assets/certificate/ASAH%202025.pdf' },
  'training-2': { title: 'Coding Camp powered by DBS Foundation 2025', url: '/assets/certificate/CC%202025.pdf' },
  'training-3': { title: 'Digistar Class 2024 by Telkom', url: '/assets/certificate/DCI2024.pdf' },
  'training-4': { title: 'Samsung Innovation Campus Batch 5 — Finalist', url: '/assets/certificate/SIC%20Finalist.pdf' },
};

const PROJECT_LINKS = {
  1: { id: 'leadsight-project-card', label: 'View LeadSight project' },
  2: { id: 'skin-classification-card', label: 'View Skin Type Classification project' },
  3: { id: 'campaign-deck-master-card', label: 'View CampaignDeck Master project' },
};

const handlers = {};

export const selectCompany = (...args) => handlers.selectCompany?.(...args);
export const changeSlide = (...args) => handlers.changeSlide?.(...args);
export const setSlide = (...args) => handlers.setSlide?.(...args);
export const setExperienceCategory = (...args) => handlers.setExperienceCategory?.(...args);
export const toggleAccordion = (...args) => handlers.toggleAccordion?.(...args);
export const selectTraining = (...args) => handlers.selectTraining?.(...args);

export function mountWorkExperience() {
  const cleanups = [];
  // Company switcher
  let activeWorkExperienceId = 1;
  let activeTrainingId = 1;

  const trainingExperiences = [
    { title: 'ASAH — DICODING × ACCENTURE', subtitle: 'React & Back-End with AI · Distinction Graduate', date: 'Aug 2025 – Jan 2026', icon: 'school', color: 'primary' },
            { title: 'CODING CAMP POWERED BY DBS FOUNDATION 2025', subtitle: 'Machine Learning Engineer Path · Full Graduate', date: 'Feb – Jul 2025', icon: 'psychology', color: 'secondary' },
            { title: 'DIGISTAR CLASS 2024 BY TELKOM | Mentee (Hipster Role)', subtitle: 'Top 2 Best Team Project', date: 'Aug – Oct 2024', icon: 'lightbulb', color: 'tertiary' },
            { title: 'SAMSUNG INNOVATION CAMPUS BATCH 5', subtitle: 'Finalist', date: 'Mar – Oct 2024', icon: 'devices', color: 'primary' }
  ];

  const certificateViewer = document.createElement('dialog');
  certificateViewer.className = 'certificate-viewer';
  certificateViewer.setAttribute('aria-label', 'Experience certificate viewer');
  certificateViewer.innerHTML = `
    <div class="flex items-center justify-between gap-4 pb-3">
      <h2 class="min-w-0 truncate text-sm font-bold text-on-surface" id="certificate-viewer-title"></h2>
      <div class="flex shrink-0 items-center gap-2">
        <button class="grid h-9 w-9 place-items-center rounded-full border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-low" type="button" aria-label="Close certificate">
          <span class="material-symbols-outlined text-[18px]" aria-hidden="true">close</span>
        </button>
      </div>
    </div>
    <img class="certificate-viewer-content certificate-viewer-image" hidden alt="">
    <div class="certificate-viewer-content certificate-viewer-pdf" hidden role="document" aria-label="PDF certificate"></div>
    <div class="certificate-viewer-content certificate-viewer-gallery" hidden role="group" aria-label="Certificate pages. Click an image to zoom."></div>
  `;
  document.body.append(certificateViewer);
  cleanups.push(() => certificateViewer.remove());
  const certificateViewerTitle = certificateViewer.querySelector('#certificate-viewer-title');
  const certificateViewerImage = certificateViewer.querySelector('.certificate-viewer-image');
  const certificateViewerPdf = certificateViewer.querySelector('.certificate-viewer-pdf');
  const certificateViewerGallery = certificateViewer.querySelector('.certificate-viewer-gallery');
  let certificateViewerTrigger = null;
  let certificatePdf = null;

  function openCertificate(fileRecord, trigger) {
    certificateViewerTrigger = trigger;
    certificateViewerTitle.textContent = fileRecord.title;
    certificateViewerImage.hidden = fileRecord.type !== 'image';
    certificateViewerPdf.hidden = fileRecord.type !== 'pdf';
    certificateViewerGallery.hidden = fileRecord.type !== 'images';
    certificateViewerGallery.classList.remove('is-zoomed');
    certificateViewerGallery.scrollTo?.(0, 0);
    if (fileRecord.type === 'images') {
      certificateViewerGallery.replaceChildren(...fileRecord.urls.map((url, index) => {
        const page = document.createElement('img');
        page.src = url;
        page.alt = `${fileRecord.title}, page ${index + 1}`;
        page.draggable = false;
        return page;
      }));
    }

    certificatePdf?.destroy();
    certificatePdf = null;

    if (fileRecord.type === 'image') {
      certificateViewerImage.src = fileRecord.url;
      certificateViewerImage.alt = `${fileRecord.title} certificate`;
    } else {
      certificateViewerImage.removeAttribute('src');
    }

    certificateViewer.showModal();
    if (fileRecord.type === 'pdf') certificatePdf = renderPdf(certificateViewerPdf, fileRecord.url);
  }

  certificateViewerGallery.addEventListener('click', (event) => {
    if (event.target.tagName !== 'IMG') return;
    certificateViewerGallery.classList.toggle('is-zoomed');
  });

  const onCertificateCard = (event) => {
    const trigger = event.target.closest?.('[data-certificate-key]');
    const certificate = trigger && CERTIFICATE_FILES[trigger.dataset.certificateKey];
    if (certificate) openCertificate({ type: 'pdf', ...certificate }, trigger);
  };
  document.addEventListener('click', onCertificateCard);
  cleanups.push(() => document.removeEventListener('click', onCertificateCard));

  function initializeCertificatePlaceholders() {
    const experienceTools = {
      'company-panel-1': 'Figma · Design System · Wireframe · Layouting · Design Variables · Token · Documentation · Pitching · B2B · Collaboration',
      'company-panel-2': 'Python · Machine Learning · Artificial Intelligence · Pytorc · TensorFlow · GColab · Kaggle · Miro',
      'company-panel-3': 'HTML/CSS · JavaScript · Technical Solving',
      'company-panel-4': 'Python · GColab · Kaggle · ML · AI · Copywriting'
    };

    document.querySelectorAll('[id^="company-panel-"]').forEach((panel) => {
      if (panel.id === 'company-panel-4') return;

      const summary = panel.querySelector('[class*="p-5"][class*="bg-surface-container-low/70"]')
        || panel.querySelector('[class*="gap-3.5"][class*="pt-6"][class*="mt-6"]');
      const title = panel.querySelector('h2');
      if (summary) {
        summary.classList.remove('grid-cols-2', 'grid-cols-3', 'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5', 'xl:grid-cols-5', 'gap-4', 'gap-3.5', 'pt-6', 'mt-6', 'border-t', 'border-outline-variant/30');
        summary.classList.add('items-stretch', 'experience-metrics', 'p-5', 'bg-surface-container-low/70', 'rounded-xl', 'border', 'border-outline-variant/40');
        let toolsTile = [...summary.children].find((item) => {
          const label = item.querySelector(':scope > span')?.textContent.trim();
          return label === 'Tools' || label === 'Tools & Skills';
        });
        if (!toolsTile) {
          toolsTile = document.createElement('div');
          summary.append(toolsTile);
        }
        toolsTile.replaceChildren();
        const toolsLabel = document.createElement('span');
        toolsLabel.textContent = 'Tools & Skills';
        const toolsDescription = document.createElement('span');
        toolsDescription.textContent = experienceTools[panel.id] || '—';
        toolsTile.append(toolsLabel, toolsDescription);

        summary.style.setProperty('--experience-metric-count', String(summary.children.length));
        [...summary.children].forEach((item) => {
          item.classList.add('experience-metric-tile');
          item.classList.remove('space-y-1', 'space-y-1.5', 'space-y-2');
          const directSpans = [...item.querySelectorAll(':scope > span')];
          const directParagraphs = [...item.querySelectorAll(':scope > p')];
          const values = directSpans.length >= 2 ? directSpans : directParagraphs;
          values[0]?.classList.add('experience-metric-value');
          values[1]?.classList.add('experience-metric-description');
        });
      }
      const certificate = CERTIFICATE_FILES[panel.id];
      if (!title || !certificate) return;

      const certificateButton = document.createElement('button');
      certificateButton.className = 'inline-flex shrink-0 items-center gap-1.5 rounded-full border border-outline-variant/50 bg-surface-container-low px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';
      certificateButton.type = 'button';
      certificateButton.setAttribute('aria-label', `Open certificate for ${title.textContent.trim() || 'this experience'}`);
      certificateButton.innerHTML = `
        <span class="material-symbols-outlined text-[13px]" aria-hidden="true">workspace_premium</span>
        <span>Certificate</span>
      `;
      const titleRow = document.createElement('div');
      titleRow.className = 'flex flex-wrap items-center gap-x-3 gap-y-2';
      title.replaceWith(titleRow);
      titleRow.append(title, certificateButton);

      certificateButton.addEventListener('click', () => {
        openCertificate({ type: 'pdf', ...certificate }, certificateButton);
      });
    });
  }

  function setExperienceCategory(category) {
    const workList = document.getElementById('work-nav-list');
    const trainingList = document.getElementById('training-nav-list');
    const count = document.getElementById('experience-category-count');
    const workButton = document.getElementById('category-work');
    const trainingButton = document.getElementById('category-training');
    const isTraining = category === 'training';

    workList.classList.toggle('hidden', isTraining);
    trainingList.classList.toggle('hidden', !isTraining);
    count.textContent = isTraining ? '4 Trainings' : '4 Roles';
    workButton.classList.toggle('bg-primary/10', !isTraining);
    workButton.classList.toggle('text-primary', !isTraining);
    workButton.classList.toggle('text-on-surface-variant', isTraining);
    workButton.setAttribute('aria-pressed', String(!isTraining));
    trainingButton.classList.toggle('bg-primary/10', isTraining);
    trainingButton.classList.toggle('text-primary', isTraining);
    trainingButton.classList.toggle('text-on-surface-variant', !isTraining);
    trainingButton.setAttribute('aria-pressed', String(isTraining));

    if (isTraining) {
      selectTraining(activeTrainingId, false);
    } else {
      selectCompany(activeWorkExperienceId, false);
    }
  }

  const trainingProfiles = [{"id":1,"icon":"integration_instructions","acc":"indigo","badge":"React & Back-End with AI","chip":"Independent Study · 2025–2026","head":"Learning to build the product — and keep the team moving.","sum":"From React interfaces and APIs to seeing how a whole web product comes together. In the LeadSight capstone I built front/back-end features and helped plan and coordinate the team.","outcome":["verified","Program Graduate","Capstone completed · Jan 2026"],"themes":[["Front-End","web","React, Hooks, routing, API integration"],["Back-End","dns","Node.js REST, JWT, validation"],["Data & Cloud","database","PostgreSQL · Redis · RabbitMQ · AWS"],["AI","psychology","AI / GenAI fundamentals, integration"],["Quality","fact_check","Postman, debugging, Git, docs"],["Team Delivery","groups","Milestones, reviews, handoffs"]],"built":["React Notes App","Bookshelf API","OpenMusic API"],"proj":{"kick":"Final Project · Capstone","tag":"Team Prototype","name":"LeadSight — Predictive Sales Lead Dashboard","role":"Project Manager · Front-End & Back-End Contributor","desc":"How can a sales team focus on leads likely to convert? A dashboard prototype using ML probability scores and visual insights from the public UCI Bank Marketing dataset. The real challenge: keeping product, development and ML work aligned.","chips":["Product planning","React & API","Cross-team delivery"],"contrib":["Organized team responsibilities, milestones, and regular progress check-ins to keep development on track.","Developed the LeadSight dashboard interface using React, translating UI designs into responsive, interactive components.","Kept contributors and advisors aligned; supported documentation and final presentation"]},"take":[["hub","Think across the system","A feature makes sense once you see the UI, API and data behind it."],["groups","Lead through alignment","Clear ownership, and room to raise blockers early."],["sync","Iterate with evidence","Reviews and debugging challenged our first assumptions."]],"note":"Based on my ASAH final report; the report itself is not published.","skills":["React","Node.js","REST API","PostgreSQL","AWS Basics"],"big":"06","cap":"learning themes","sub":"Front-End · Back-End · Data & Cloud · AI · Quality · Delivery"},{"id":2,"icon":"model_training","acc":"emerald","badge":"Machine Learning Engineer Path","chip":"Independent Study · Feb–Jul 2025","head":"The model is only as useful as the decisions behind it.","sum":"From messy datasets to predictive models, deep learning and deployment formats. The biggest lesson: a model isn’t finished when it predicts — it needs reliable data, meaningful evaluation and a way to fit a real application.","outcome":["verified","Full Graduate","Machine Learning Engineer · Jul 2025"],"themes":[["Analyze","monitoring","Python, Pandas, SQL, Streamlit"],["Model","query_stats","Scikit-learn, KNN, RF, K-Means"],["Deep Learning","psychology","TensorFlow, Keras, CNN, BiLSTM"],["Pipelines","account_tree","ETL, Sheets API, PostgreSQL"],["Evaluate","fact_check","Precision · Recall · F1 · TFLite"],["Collaborate","groups","Reviews, docs, team alignment"]],"built":["Bike Sharing Analytics","Bank Fraud Patterns","Review Sentiment (NLP)","Python ETL Pipeline","Diabetes Risk Prediction","Movie Recommender"],"proj":{"kick":"Final Project · Capstone","tag":"Cross-Functional Prototype","name":"Dermalyze — Facial Skin Type Classification","role":"Machine Learning Engineer · Cross-Functional Contributor","desc":"Can image-based AI classify facial skin types? The team trained and evaluated deep-learning models on RGB and grayscale images, and revised its approach as dataset and integration limits appeared.","chips":["TensorFlow & Keras","Model evaluation","TF.js & TFLite"],"contrib":["ML side: image-data preparation, model development and evaluation","Supported model export so app teammates could explore integration options","Discussed trade-offs with front/back-end teammates as datasets and needs changed"]},"take":[["analytics","Evidence first","A confident prediction means little if the data misrepresents the problem."],["hub","Engineer for integration","A model is useful only when the application can work with it."],["groups","Adapt under constraints","Changing plans works when everyone knows why."]],"note":"Based on my Coding Camp 2025 final report; personal documents are not shared publicly.","skills":["Python","Pandas · SQL","TensorFlow","Scikit-learn","Streamlit"],"big":"06","cap":"learning themes","sub":"Analyze · Model · Deep Learning · Pipelines · Evaluate · Collaborate"},{"id":3,"icon":"lightbulb","acc":"violet","badge":"Mentored UI/UX Learning Track","chip":"Hipster Role","head":"Good design starts long before the first screen.","sum":"The Hipster track taught me to ask: who are we designing for, and what do they actually need? Research, clear flows, prototypes and usability feedback turn that question into design decisions.","outcome":["emoji_events","Top 2 Best Team Project","Team recognition · Digistar Class 2024"],"themes":[["Think","psychology","UX foundations, design thinking"],["Research","manage_search","Interviews, surveys, SUS"],["Structure","account_tree","Personas, flows, wireframes"],["Design","dashboard_customize","Figma, hierarchy, style guides"],["Test","rule","Prototyping, UT / HE, handoff"],["Communicate","present_to_all","Case study storytelling"]],"built":[],"proj":{"kick":"Final Project · Team Capstone","tag":"Design-Stage Concept","name":"CampaignDeck Master","role":"Business Analysis & UX Lead · Hipster Role","desc":"Campaign workflows get hard to follow when info and actions are spread across steps. The team explored a clearer experience inspired by Telkom’s OCA Blast. A design-stage concept and prototype, not a launched product.","chips":["Requirements","User research","User flows","Figma prototype"],"contrib":["Turned the campaign challenge into clearer requirements and product direction","Brought user input in via surveys, affinity and empathy mapping","Connected workflows to user journeys, wireframes and an interactive prototype"]},"take":[["target","Start with the problem","A polished screen can’t fix the wrong problem."],["hub","Make ideas understandable","A shared flow keeps the team on one experience."],["fact_check","Validate before refining","Evidence reveals friction a pretty UI can hide."]],"note":"Based on the 2024 Hipster mentoring curriculum. Tools: Figma · Google Forms · Userberry · Notion · Jira.","skills":["Figma","User Research","Wireframing","Prototyping","Usability Testing"],"big":"06","cap":"learning modules","sub":"Think · Research · Structure · Design · Test · Communicate"},  {"id":4,"icon":"devices","acc":"sky","badge":"Python · IoT · Artificial Intelligence","head":"When sensors meet software, data becomes something people can use.","sum":"Connected what I’d seen separately — Python, sensors, IoT networks and AI. In the AgroSense capstone they came together in a hydroponic monitoring prototype, ending as a program finalist.","outcome":["emoji_events","SIC Batch 5 Finalist","Team capstone: AgroSense"],"stages":[["01","Python & Programming","Mar 2–24, 2024","93.91"],["02","IoT Fundamentals","Apr 20–27, 2024","100"],["03","AI & IoT Integration","May 18–Jul 27, 2024","91.85"]],"themes":[["Foundation","terminal","Python, algorithms, Git"],["Hardware","memory","ESP32, sensors, Arduino IDE"],["Platforms","hub","Flask, MQTT, Node-RED, Ubidots"],["Data","query_stats","Sensor data collection, processing"],["Intelligence","neurology","ML for IoT, computer vision"],["Delivery","present_to_all","Streamlit, capstone, pitching"]],"built":[],"proj":{"kick":"Final Project · Capstone","tag":"Program Finalist","name":"AgroSense — AI-Powered Hydroponic Monitoring","role":"Front-End & AI Integration Contributor","desc":"Healthy hydroponics depends on conditions that are hard to check continuously. AgroSense brings ESP32 sensor readings and AI plant-image analysis into one monitoring interface. A demonstrable prototype, not a commercial deployment.","chips":["ESP32 & IoT sensors","DenseNet121","Arduino C/C++","Streamlit"],"contrib":["Built the front-end experience for sensor and plant-health views","Supported AI integration across device, data and model workflows","Collaborated with the team on pitching the solution"]},"take":[["device_hub","Systems thinking","A reading only helps when it becomes actionable information."],["fact_check","Practical AI","Device limits and data quality shape what AI can promise."],["groups","Cross-functional delivery","Hardware, interface and AI made sense together."]],"note":"Based on SIC Batch 5 curriculum and completion certificates; certificate files are not publicly embedded.","skills":["Python","ESP32","MQTT · Node-RED","Computer Vision","Streamlit"],"big":"03","cap":"completed stages","sub":"Python & Programming → IoT Fundamentals → AI & IoT Integration"}];

  function renderTrainingProfile(id) {
    const p = trainingProfiles.find(item => item.id === id);
    if (!p) return '';
    const [oIcon, oTitle, oSub] = p.outcome;
    const kicker = (icon, label, extra = '') => `<div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">${icon}</span><h3 class="text-body-md font-bold text-on-surface uppercase tracking-wider font-label-kicker">${label}</h3></div>${extra}</div>`;
    const stages = p.stages ? `
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3" aria-label="Completed program stages">
        ${p.stages.map(s => `
          <div class="flex items-center gap-3 rounded-xl border border-outline-variant/40 bg-surface-container-low/60 p-3.5">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-black font-label-code">${s[0]}</span>
            <div class="min-w-0"><p class="truncate text-xs font-bold text-on-surface">${s[1]}</p><p class="text-[10px] text-on-surface-variant font-label-code">${s[2]}</p></div>
            <span class="ml-auto shrink-0 text-right text-sm font-bold text-primary">${s[3]}<span class="block text-[9px] font-medium text-outline">/ 100</span></span>
          </div>`).join('')}
      </div>` : '';
    const built = p.built.length ? `
      <div class="flex flex-wrap items-center gap-1.5 border-t border-outline-variant/30 pt-3">
        <span class="mr-1 text-[10px] font-semibold uppercase tracking-wider text-outline">Hands-on builds</span>
        ${p.built.map(b => `<span class="rounded-full bg-surface-container px-2.5 py-1 text-[10px] font-medium text-on-surface-variant font-label-code">${b}</span>`).join('')}
      </div>` : '';
    const projectBackground = p.id === 1
      ? ' style="background-image:linear-gradient(90deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.91) 52%,rgba(255,255,255,.62) 100%),url(\'/assets/experience/ASAH%202025/Leadsight%20Profile.png\');background-size:cover;background-position:center;"'
      : p.id === 2
        ? ' style="background-image:linear-gradient(90deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.91) 52%,rgba(255,255,255,.62) 100%),url(\'/assets/experience/Coding%20Camp%20Cohort%202025/Profile%20Dermalyze.png\');background-size:cover;background-position:center;"'
        : p.id === 3
          ? ' style="background-image:linear-gradient(90deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.91) 52%,rgba(255,255,255,.62) 100%),url(\'/assets/experience/Digistar%20Class%202024/Project%20Profile%20CDM.webp\');background-size:cover;background-position:center;"'
          : '';
    const trainingNote = '';
    return `
    <div class="space-y-6" data-training-profile="${p.id}">
      <div class="work-hero relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50/70 to-cyan-50/50 p-5 shadow-sm md:p-6">
        <div class="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border-[24px] border-indigo-100/40" aria-hidden="true"></div>
        <div class="work-hero-grid relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
          <div class="work-hero-main flex min-w-0 flex-col gap-3 lg:col-span-8">
            <div data-training-slot class="flex flex-col gap-3"></div>
            <p class="max-w-2xl text-[13px] leading-relaxed text-slate-600">${p.sum}</p>
            <div class="mt-auto flex flex-wrap items-center gap-1.5 border-t border-indigo-100 pt-3"><span class="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Skills &amp; Tools</span>${p.skills.map(c => `<span class="rounded-md border border-indigo-100 bg-white px-2 py-1 text-[10px] font-semibold leading-none text-indigo-700">${c}</span>`).join('')}</div>
          </div>
          <div class="work-hero-side flex min-w-0 flex-col rounded-2xl bg-[#17234a] p-4 text-white shadow-lg shadow-indigo-950/10 lg:col-span-4">
            <div class="flex items-center justify-between gap-3"><span class="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Training Snapshot</span><span class="material-symbols-outlined text-xl text-indigo-200" aria-hidden="true">${p.icon}</span></div>
            <div class="mt-3 flex flex-wrap items-baseline gap-x-2"><span class="text-3xl font-black tracking-tight">${p.big}</span><span class="text-xs text-indigo-100">${p.cap}</span></div>
            <p class="mt-1 text-[11px] leading-relaxed text-indigo-100">${p.sub}</p>
            <div class="mt-auto border-t border-white/20 pt-3"><div class="flex items-start gap-2"><span class="material-symbols-outlined shrink-0 text-lg text-amber-300" aria-hidden="true">${oIcon}</span><div class="min-w-0"><p class="text-sm font-bold leading-snug">${oTitle}</p><p class="text-[11px] text-indigo-200">${oSub}</p></div></div></div>
          </div>
        </div>
      </div>
      ${stages}
      <div class="space-y-4 rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm">
        ${kicker('school', 'What I Learned &amp; Practiced', `<span class="text-[10px] font-semibold text-outline">${p.themes.length} themes</span>`)}
        <div class="grid grid-cols-2 gap-3 lg:grid-cols-3">
          ${p.themes.map((t, i) => `
            <div class="space-y-1.5 rounded-xl border border-outline-variant/40 bg-surface-container-low/60 p-3.5 transition-colors hover:border-primary/40">
              <div class="flex items-center justify-between"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary"><span class="material-symbols-outlined text-[16px]" aria-hidden="true">${t[1]}</span></span><span class="text-[10px] font-semibold tracking-widest text-outline font-label-code">0${i + 1}</span></div>
              <h4 class="text-body-sm font-bold text-on-surface">${t[0]}</h4>
              <p class="text-[11px] leading-snug text-on-surface-variant">${t[2]}</p>
            </div>`).join('')}
        </div>
        ${built}
      </div>
      <div class="space-y-4 rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-sm"${projectBackground}>
        ${kicker('rocket_launch', p.proj.kick, `<span class="rounded-full bg-tertiary-fixed px-2.5 py-0.5 text-[10px] font-semibold text-on-tertiary-fixed">${p.proj.tag}</span>`)}
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div class="space-y-2.5 lg:col-span-3">
            <div><h4 class="text-body-lg font-bold text-on-surface">${p.proj.name}</h4><p class="mt-0.5 text-xs font-semibold text-primary">${p.proj.role}</p></div>
            <p class="text-body-sm leading-relaxed text-on-surface-variant">${p.proj.desc}</p>
            <div class="flex flex-wrap gap-1.5">${p.proj.chips.map(c => `<span class="rounded-full bg-surface-container px-2.5 py-1 text-[10px] font-medium text-on-surface-variant font-label-code">${c}</span>`).join('')}</div>
            ${PROJECT_LINKS[p.id] ? `<a class="ev-project-btn" href="/?project=${PROJECT_LINKS[p.id].id}#selected-works">${PROJECT_LINKS[p.id].label}<span aria-hidden="true">→</span></a>` : ''}
          </div>
          <div class="space-y-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-low/60 p-4 lg:col-span-2">
            <p class="text-[10px] font-semibold uppercase tracking-wider text-outline">My Contribution</p>
            <ul class="space-y-2">${p.proj.contrib.map(c => `<li class="flex gap-2 text-[11px] leading-relaxed text-on-surface-variant"><span class="material-symbols-outlined shrink-0 text-[15px] text-primary" aria-hidden="true">check_circle</span><span>${c}</span></li>`).join('')}</ul>
          </div>
        </div>
      </div>
      <div class="space-y-3 rounded-2xl border border-outline-variant/40 bg-surface-container-low/60 p-5">
        ${kicker('lightbulb', 'Key Takeaways')}
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
          ${p.take.map(t => `<div class="flex items-start gap-2.5"><span class="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-primary" aria-hidden="true">${t[0]}</span><p class="text-[11px] leading-snug text-on-surface-variant"><strong class="block text-xs text-on-surface">${t[1]}</strong>${t[2]}</p></div>`).join('')}
        </div>
      </div>
      <p class="px-1 text-[10px] leading-relaxed text-outline">${trainingNote}</p>
    </div>`;
  }

  function selectTraining(id, shouldScroll = true) {
    const training = trainingExperiences[id - 1];
    const detail = document.getElementById('training-detail');
    if (!training || !detail) return;

    activeTrainingId = id;
    const asahDetails = detail.querySelector('#asah-training-details');
    if (asahDetails) asahDetails.classList.toggle('hidden', id !== 1);
    const codingcamp2025Details = detail.querySelector('#codingcamp-2025-training-details');
    if (codingcamp2025Details) codingcamp2025Details.classList.toggle('hidden', id !== 2);
    const digistarHipsterDetails = detail.querySelector('#digistar-hipster-details');
    if (digistarHipsterDetails) digistarHipsterDetails.classList.toggle('hidden', id !== 3);
    const samsung2024Details = detail.querySelector('#samsung-2024-training-details');
    if (samsung2024Details) samsung2024Details.classList.toggle('hidden', id !== 4);

    const activeDetails = [asahDetails, codingcamp2025Details, digistarHipsterDetails, samsung2024Details][id - 1];
    const activeCard = activeDetails?.firstElementChild;
    if (activeCard) {
      let trainingHeading = activeCard.querySelector('[data-training-heading]');
      if (!trainingHeading) {
        trainingHeading = document.createElement('div');
        trainingHeading.dataset.trainingHeading = '';
        trainingHeading.className = 'relative z-20 flex flex-col gap-3';
        const profile = trainingProfiles.find(item => item.id === id) || {};
        trainingHeading.innerHTML = `
          <div class="flex flex-wrap items-center gap-2">
            <span class="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700"><span class="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-ping"></span><span data-training-date></span></span>
            <span class="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-white/85 px-3 py-1 text-[10px] font-semibold text-indigo-800"><span class="material-symbols-outlined text-[13px]" aria-hidden="true">${profile.icon || 'school'}</span>${profile.chip || 'Training'}</span>
          </div>
          <div class="min-w-0 space-y-1">
            <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 data-training-title class="break-words text-xl font-extrabold leading-snug tracking-tight text-[#131b2e] sm:text-2xl"></h2>
              <button data-training-certificate type="button" class="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-outline-variant/50 bg-surface-container-low px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant transition hover:bg-surface-container">
                <span class="material-symbols-outlined text-[13px]" aria-hidden="true">workspace_premium</span>
                <span>Certificate</span>
              </button>
            </div>
            <p class="text-sm font-bold leading-snug text-indigo-700">${profile.badge || ''}</p>
          </div>
        `;
        const certificateButton = trainingHeading.querySelector('[data-training-certificate]');
        const certificateKey = `training-${id}`;
        const certificate = CERTIFICATE_FILES[certificateKey];
        if (certificate) {
          certificateButton.setAttribute('aria-label', `Open certificate for ${training.title}`);
          certificateButton.addEventListener('click', () => {
            openCertificate({ type: 'pdf', ...certificate }, certificateButton);
          });
        } else {
          certificateButton.remove();
        }
        (activeCard.querySelector('[data-training-slot]') || activeCard).prepend(trainingHeading);
      }
    }

    document.querySelectorAll('.company-stage').forEach(panel => {
      panel.classList.add('hidden');
      panel.classList.remove('block');
    });
    detail.classList.remove('hidden');
    detail.classList.add('block');
    const trainingTitle = activeCard?.querySelector('[data-training-title]');
    const trainingDate = activeCard?.querySelector('[data-training-date]');
    if (trainingTitle) trainingTitle.textContent = training.title;
    if (trainingDate) trainingDate.textContent = training.date;

    document.querySelectorAll('.company-nav-btn').forEach(button => {
      button.classList.remove('bg-primary/10', 'border-2', 'border-primary/60', 'shadow-sm');
      button.classList.add('bg-surface-container-low/60', 'border', 'border-outline-variant/40');
    });
    const currentButton = document.getElementById(`training-nav-${id}`);
    if (currentButton) {
      currentButton.classList.remove('bg-surface-container-low/60', 'border-outline-variant/40');
      currentButton.classList.add('bg-primary/10', 'border-2', 'border-primary/60', 'shadow-sm');
    }

    if (shouldScroll && window.innerWidth < 1024) {
      detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function initializeExperienceCategories() {
    const sidebar = document.querySelector('main section aside > div');
    if (!sidebar) return;

    const count = sidebar.querySelector('.border-b').nextElementSibling;
    const workList = count;
    const header = sidebar.querySelector('.border-b');
    const countBadge = header?.lastElementChild;
    const rightColumn = document.getElementById('company-panel-1')?.parentElement;
    if (!workList || !header || !countBadge || !rightColumn) return;

    countBadge.id = 'experience-category-count';
    workList.id = 'work-nav-list';

    const categoryButtons = document.createElement('div');
    categoryButtons.className = 'grid grid-cols-2 gap-2';
    categoryButtons.innerHTML = `
      <button id="category-work" type="button" aria-pressed="true" class="rounded-lg px-2 py-2 text-[11px] font-semibold transition-colors bg-primary/10 text-primary">Work &amp; Internship</button>
      <button id="category-training" type="button" aria-pressed="false" class="rounded-lg px-2 py-2 text-[11px] font-semibold transition-colors text-on-surface-variant hover:bg-surface-container">Training</button>
    `;
    categoryButtons.querySelector('#category-work').addEventListener('click', () => setExperienceCategory('work'));
    categoryButtons.querySelector('#category-training').addEventListener('click', () => setExperienceCategory('training'));
    sidebar.insertBefore(categoryButtons, workList);

    const trainingList = document.createElement('div');
    trainingList.id = 'training-nav-list';
    trainingList.className = 'hidden space-y-2.5 relative';
    const timeline = document.createElement('div');
    timeline.className = 'absolute left-[20px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary opacity-30 z-0 pointer-events-none';
    trainingList.append(timeline);

    trainingExperiences.forEach((training, index) => {
      const id = index + 1;
      const button = document.createElement('button');
      button.id = `training-nav-${id}`;
      button.type = 'button';
      button.className = 'company-nav-btn w-full text-left relative flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-surface-container border border-outline-variant/40 group z-10 bg-surface-container-low/60';
      button.addEventListener('click', () => selectTraining(id));
      button.innerHTML = `
        <span class="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-${training.color} border border-outline-variant/40 group-hover:scale-105 transition-transform">
          <span class="material-symbols-outlined text-[15px]">${training.icon}</span>
        </span>
        <span class="min-w-0 flex-1 space-y-0.5">
          <span class="flex items-center justify-between gap-1">
            <span class="date-accent text-[10px] font-semibold uppercase tracking-wider text-${training.color} font-label-code">${training.date}</span>
            <span class="category-accent shrink-0 rounded-full bg-surface-container px-2 py-0.5 text-[9px] font-medium text-on-surface-variant">${id} / 4</span>
          </span>
          <span class="block truncate text-body-sm font-bold leading-tight text-on-surface">${training.title}</span>
          <span class="block truncate text-[11px] text-on-surface-variant">${training.subtitle}</span>
        </span>
      `;
      trainingList.append(button);
    });

    sidebar.append(trainingList);

    const trainingDetail = document.createElement('section');
    trainingDetail.id = 'training-detail';
    trainingDetail.className = 'company-stage hidden space-y-5';
    trainingDetail.innerHTML = '';
    const digistarHipsterSection = document.createElement('div');
    digistarHipsterSection.innerHTML = `
<section id="digistar-hipster-details" class="hidden space-y-5 mt-6" aria-label="Digistar Class 2024 Hipster learning details">
${renderTrainingProfile(3).replace(/<p class="px-1 text-\[10px\]/, '<div class="mt-6">' + renderTrainingEvidence(3) + '</div><p class="hidden"')}
</section>
`;
    trainingDetail.append(digistarHipsterSection.firstElementChild);

    const asahTrainingSection = document.createElement('div');
    asahTrainingSection.innerHTML = `

<section id="asah-training-details" class="hidden space-y-5 mt-6" aria-label="ASAH training details">
${renderTrainingProfile(1).replace(/<p class="px-1 text-\[10px\]/, '<div class="mt-6">' + renderTrainingEvidence(1) + '</div><p class="hidden"')}
</section>
`;
    trainingDetail.append(asahTrainingSection.firstElementChild);

    const codingcamp2025Section = document.createElement('div');
    codingcamp2025Section.innerHTML = `

<section id="codingcamp-2025-training-details" class="hidden space-y-5 mt-6" aria-label="Coding Camp 2025 training details">
${renderTrainingProfile(2).replace(/<p class="px-1 text-\[10px\]/, '<div class="mt-6">' + renderTrainingEvidence(2) + '</div><p class="hidden"')}
</section>
`;
    trainingDetail.append(codingcamp2025Section.firstElementChild);


    const samsungTrainingSection = document.createElement('div');
    samsungTrainingSection.innerHTML = `
<section id="samsung-2024-training-details" class="hidden space-y-5 mt-6" aria-label="Samsung Innovation Campus Batch 5 training details">
${renderTrainingProfile(4).replace(/<p class="px-1 text-\[10px\]/, '<div class="mt-6">' + renderTrainingEvidence(4) + '</div><p class="hidden"')}
</section>
`;
    trainingDetail.append(samsungTrainingSection.firstElementChild);

    rightColumn.append(trainingDetail);
    cleanups.push(bindTrainingEvidence(trainingDetail, openCertificate));
  }

  function selectCompany(id, shouldScroll = true) {
    activeWorkExperienceId = id;
    document.querySelectorAll('.company-stage').forEach(panel => {
      panel.classList.add('hidden');
      panel.classList.remove('block');
    });

    const activePanel = document.getElementById(`company-panel-${id}`);
    if (activePanel) {
      activePanel.classList.remove('hidden');
      activePanel.classList.add('block');
    }

    document.querySelectorAll('.company-nav-btn').forEach(btn => {
      btn.classList.remove('bg-primary/10', 'border-2', 'border-primary/60', 'shadow-sm');
      btn.classList.add('bg-surface-container-low/60', 'border', 'border-outline-variant/40');
    });

    const currentBtn = document.getElementById(`nav-item-${id}`);
    if (currentBtn) {
      currentBtn.classList.remove('bg-surface-container-low/60', 'border-outline-variant/40');
      currentBtn.classList.add('bg-primary/10', 'border-2', 'border-primary/60', 'shadow-sm');
    }

    if (shouldScroll && window.innerWidth < 1024) {
      activePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  initializeExperienceCategories();
  initializeCertificatePlaceholders();
  const workNavigation = document.querySelector('#work-nav-list');
  const dicodingNavigationItem = document.getElementById('nav-item-4');
  const lepkomNavigationItem = document.getElementById('nav-item-3');
  if (workNavigation && dicodingNavigationItem && lepkomNavigationItem) {
    workNavigation.insertBefore(dicodingNavigationItem, lepkomNavigationItem);
  }
  selectCompany(1, false);
  if (window.location.hash === '#digistar-class-2024') {
    setExperienceCategory('training');
    selectTraining(3, false);
  } else if (window.location.hash === '#samsung-innovation-campus-2024') {
    setExperienceCategory('training');
    selectTraining(4, false);
  }


  certificateViewer.querySelector('button').addEventListener('click', () => {
    certificateViewer.close();
  });
  certificateViewer.addEventListener('click', (event) => {
    if (event.target === certificateViewer) certificateViewer.close();
  });
  certificateViewer.addEventListener('close', () => {
    certificateViewerImage.removeAttribute('src');
    certificatePdf?.destroy();
    certificatePdf = null;
    certificateViewerTrigger?.focus();
    certificateViewerTrigger = null;
  });
  cleanups.push(() => certificatePdf?.destroy());

  // Accordion
  function toggleAccordion(contentId) {
    const el = document.getElementById(contentId);
    const icon = document.getElementById(`${contentId}-icon`);
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden');
      if (icon) icon.classList.add('rotate-180');
    } else {
      el.classList.add('hidden');
      if (icon) icon.classList.remove('rotate-180');
    }
  }

  // Slideshow galleries
  const galleryState = {
    1: { current: 0, total: 3 },
    2: { current: 0, total: 1 },
    3: { current: 0, total: 2 },
    5: { current: 0, total: 8 }
  };

  const experienceLightbox = document.createElement('dialog');
  experienceLightbox.className = 'experience-lightbox';
  experienceLightbox.setAttribute('aria-label', 'Fullscreen experience image');
  experienceLightbox.innerHTML = `
    <button class="experience-lightbox-close" type="button" aria-label="Close fullscreen image">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M18 6 6 18M6 6l12 12"></path>
      </svg>
    </button>
    <img alt="">
    <p></p>
  `;
  document.body.appendChild(experienceLightbox);
  cleanups.push(() => experienceLightbox.remove());
  const experienceLightboxImage = experienceLightbox.querySelector('img');
  const experienceLightboxCaption = experienceLightbox.querySelector('p');
  let experienceLightboxTrigger = null;

  function openExperienceImage(image, trigger) {
    experienceLightboxTrigger = trigger;
    experienceLightboxImage.src = image.currentSrc || image.src;
    experienceLightboxImage.alt = image.alt || 'Experience image';
    experienceLightboxCaption.textContent = image.alt || '';
    experienceLightbox.showModal();
  }

  function initializeExperienceImageExpandButtons() {
    document.querySelectorAll('main img').forEach(image => {
      const frame = image.parentElement;
      if (!frame || image.closest('.ev, .tas')) return;
      if (getComputedStyle(frame).position === 'static') frame.classList.add('relative');

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'experience-image-expand';
      button.setAttribute('aria-label', `View full-screen image: ${image.alt || 'experience image'}`);
      button.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3"></path>
        </svg>
      `;
      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        openExperienceImage(image, button);
      });
      frame.appendChild(button);
    });
  }

  experienceLightbox.querySelector('.experience-lightbox-close').addEventListener('click', () => {
    experienceLightbox.close();
  });
  experienceLightbox.addEventListener('click', event => {
    if (event.target === experienceLightbox) experienceLightbox.close();
  });
  const closeLightboxOnEscape = event => {
    if (event.key === 'Escape' && experienceLightbox.open) {
      event.preventDefault();
      experienceLightbox.close();
    }
  };
  document.addEventListener('keydown', closeLightboxOnEscape, true);
  cleanups.push(() => document.removeEventListener('keydown', closeLightboxOnEscape, true));
  experienceLightbox.addEventListener('close', () => {
    experienceLightboxImage.removeAttribute('src');
    if (experienceLightboxTrigger?.isConnected) experienceLightboxTrigger.focus();
    experienceLightboxTrigger = null;
  });

  function addDocumentationCaption(frame, imagePath, activity) {
    const gradient = document.createElement('div');
    gradient.className = 'absolute inset-0 z-10 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent pointer-events-none';

    const caption = document.createElement('div');
    caption.className = 'absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between gap-3 text-surface-container-lowest font-label-code text-xs';

    const path = document.createElement('span');
    path.className = 'min-w-0 truncate font-semibold';
    path.textContent = imagePath;

    const label = document.createElement('span');
    label.className = 'shrink-0 max-w-[55%] truncate rounded-full bg-primary/90 px-2.5 py-1 text-[10px] font-semibold';
    label.textContent = activity;

    caption.append(path, label);
    frame.append(gradient, caption);
  }

  function enableExperienceGalleryScroll(frame, id) {
    const state = galleryState[id];
    frame.style.touchAction = 'pan-y';

    let pointerStart = null;
    let swipeHandled = false;
    let lastWheelNavigation = 0;
    frame.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.target.closest('button')) return;
      pointerStart = { x: event.clientX, y: event.clientY };
    });
    frame.addEventListener('pointerup', event => {
      if (!pointerStart) return;
      const deltaX = event.clientX - pointerStart.x;
      const deltaY = event.clientY - pointerStart.y;
      pointerStart = null;
      if (state.total > 1 && Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
        swipeHandled = true;
        changeSlide(id, deltaX < 0 ? 1 : -1);
        window.setTimeout(() => {
          swipeHandled = false;
        }, 0);
      }
    });
    frame.addEventListener('pointercancel', () => {
      pointerStart = null;
    });
    frame.addEventListener('click', event => {
      if (!swipeHandled) return;
      event.preventDefault();
      event.stopPropagation();
    }, true);
    frame.addEventListener('wheel', event => {
      const scrollDelta = event.deltaX;
      if (state.total < 2 || Math.abs(scrollDelta) < 12 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
      event.preventDefault();
      const now = performance.now();
      if (now - lastWheelNavigation < 400) return;
      lastWheelNavigation = now;
      changeSlide(id, scrollDelta > 0 ? 1 : -1);
    }, { passive: false });
  }

  function addExperienceGalleryControls(frame, id) {
    const state = galleryState[id];
    frame.classList.add('group/frame');
    enableExperienceGalleryScroll(frame, id);

    const indicators = document.createElement('div');
    indicators.className = 'absolute bottom-11 left-0 right-0 z-20 flex items-center justify-center gap-2';
    for (let index = 0; index < state.total; index += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `dot-${id} h-2 rounded-full transition-all ${index === 0 ? 'bg-surface-container-lowest w-4' : 'bg-surface-container-lowest/50 w-2'}`;
      dot.setAttribute('aria-label', `Show documentation image ${index + 1}`);
      dot.addEventListener('click', () => setSlide(id, index));
      indicators.append(dot);
    }
    frame.append(indicators);
  }

  function initializeAdditionalExperienceGalleries() {
    const telkomImage = document.querySelector('#company-panel-1 .slide-item-1 img');
    const telkomFrame = telkomImage?.closest('.group\\/frame');
    if (telkomFrame) {
      enableExperienceGalleryScroll(telkomFrame, 1);
    }

    const telkomVault = document.querySelector('#company-panel-1 .slide-item-5')?.parentElement;
    if (telkomVault) enableExperienceGalleryScroll(telkomVault, 5);

    const dbsCarousel = document.getElementById('dbs-documentation-carousel');
    const dbsSlides = dbsCarousel?.querySelectorAll('[data-documentation-slide]');
    if (dbsCarousel && dbsSlides && dbsSlides.length) {
      dbsCarousel.querySelectorAll('[data-dbs-carousel-direction]').forEach(button => {
        button.addEventListener('click', () => {
          const direction = Number(button.dataset.dbsCarouselDirection);
          const atEnd = dbsCarousel.scrollLeft + dbsCarousel.clientWidth >= dbsCarousel.scrollWidth - 8;
          if (direction > 0 && atEnd) {
            dbsCarousel.scrollTo({ left: 0, behavior: 'smooth' });
            return;
          }
          if (direction < 0 && dbsCarousel.scrollLeft <= 8) {
            dbsCarousel.scrollTo({ left: dbsCarousel.scrollWidth, behavior: 'smooth' });
            return;
          }
          dbsCarousel.scrollBy({ left: direction * dbsCarousel.clientWidth, behavior: 'smooth' });
        });
      });

      let pointerStart = null;
      let dragged = false;
      dbsCarousel.addEventListener('pointerdown', event => {
        if (event.button !== 0 || event.target.closest('button')) return;
        pointerStart = {
          x: event.clientX,
          scrollLeft: dbsCarousel.scrollLeft,
          scrollBehavior: dbsCarousel.style.scrollBehavior
        };
        dbsCarousel.style.scrollBehavior = 'auto';
        dragged = false;
      });
      dbsCarousel.addEventListener('pointermove', event => {
        if (!pointerStart) return;
        const deltaX = event.clientX - pointerStart.x;
        if (Math.abs(deltaX) < 6 && !dragged) return;
        dragged = true;
        dbsCarousel.scrollLeft = pointerStart.scrollLeft - deltaX;
        event.preventDefault();
      });
      const stopDbsDrag = () => {
        if (pointerStart) dbsCarousel.style.scrollBehavior = pointerStart.scrollBehavior;
        pointerStart = null;
        if (!dragged) return;
        window.setTimeout(() => { dragged = false; }, 0);
      };
      dbsCarousel.addEventListener('pointerup', stopDbsDrag);
      dbsCarousel.addEventListener('pointercancel', stopDbsDrag);
      dbsCarousel.addEventListener('click', event => {
        if (!dragged) return;
        event.preventDefault();
        event.stopPropagation();
      }, true);

      let lastWheelScroll = 0;
      dbsCarousel.addEventListener('wheel', event => {
        const horizontalDelta = event.deltaX;
        if (Math.abs(horizontalDelta) < 12 || Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
        event.preventDefault();
        const now = performance.now();
        if (now - lastWheelScroll < 350) return;
        lastWheelScroll = now;
        const direction = Math.sign(horizontalDelta);
        const atEnd = dbsCarousel.scrollLeft + dbsCarousel.clientWidth >= dbsCarousel.scrollWidth - 8;
        if (direction > 0 && atEnd) {
          dbsCarousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          dbsCarousel.scrollBy({
            left: direction * Math.max(Math.abs(horizontalDelta), 380),
            behavior: 'smooth'
          });
        }
      }, { passive: false });
    }

    document.querySelectorAll('[data-training-doc^="samsung-"][data-training-gallery]').forEach(card => {
      const gallery = JSON.parse(card.dataset.trainingGallery);
      const image = card.querySelector('img');
      if (!image || gallery.length < 2) return;
      let active = 0;
      const rotate = () => {
        active = (active + 1) % gallery.length;
        image.src = gallery[active].src;
        image.alt = gallery[active].alt;
      };
      const timer = window.setInterval(rotate, 4000);
      window.addEventListener('beforeunload', () => window.clearInterval(timer), { once: true });
    });

    const lepkomArtifactCarousel = document.getElementById('lepkom-artifact-carousel');
    if (lepkomArtifactCarousel) {
      const controls = lepkomArtifactCarousel.previousElementSibling?.querySelectorAll('[data-artifact-direction]');
      const updateControls = () => {
        const atStart = lepkomArtifactCarousel.scrollLeft <= 8;
        const atEnd = lepkomArtifactCarousel.scrollLeft + lepkomArtifactCarousel.clientWidth >= lepkomArtifactCarousel.scrollWidth - 8;
        controls?.forEach((button) => {
          const direction = Number(button.dataset.artifactDirection);
          button.hidden = direction < 0 ? !atEnd : atEnd;
          button.setAttribute('aria-label', direction < 0 && atEnd ? 'Return to first visual artifact' : direction < 0 ? 'Previous visual artifact' : 'Next visual artifact');
          if (atStart && direction < 0) button.hidden = true;
        });
      };
      controls?.forEach((button) => {
        button.addEventListener('click', () => {
          const direction = Number(button.dataset.artifactDirection);
          const atEnd = lepkomArtifactCarousel.scrollLeft + lepkomArtifactCarousel.clientWidth >= lepkomArtifactCarousel.scrollWidth - 8;
          lepkomArtifactCarousel.scrollTo({
            left: direction < 0 && atEnd ? 0 : lepkomArtifactCarousel.scrollLeft + direction * 380,
            behavior: 'smooth'
          });
        });
      });
      lepkomArtifactCarousel.addEventListener('scroll', updateControls, { passive: true });
      window.setTimeout(updateControls, 0);
    }

    document.querySelectorAll('main img:not([loading])').forEach((image) => {
      image.loading = 'lazy';
      image.decoding = 'async';
    });
    initializeExperienceImageExpandButtons();
  }

  function updateSlideshowUI(id) {
    const state = galleryState[id];
    const slides = document.querySelectorAll(`.slide-item-${id}`);
    const dots = document.querySelectorAll(`.dot-${id}`);

    slides.forEach((slide, idx) => {
      if (idx === state.current) {
        slide.classList.remove('opacity-0', 'pointer-events-none');
        slide.classList.add('opacity-100');
      } else {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === state.current) {
        dot.classList.remove('bg-surface-container-lowest/40');
        dot.classList.add('bg-surface-container-lowest', 'w-4');
      } else {
        dot.classList.remove('bg-surface-container-lowest', 'w-4');
        dot.classList.add('bg-surface-container-lowest/40');
      }
    });
  }

  function changeSlide(id, step) {
    const state = galleryState[id];
    state.current = (state.current + step + state.total) % state.total;
    updateSlideshowUI(id);
  }

  function setSlide(id, index) {
    galleryState[id].current = index;
    updateSlideshowUI(id);
  }

  initializeAdditionalExperienceGalleries();
  Object.keys(galleryState).forEach(id => {
    updateSlideshowUI(id);
  });

  Object.assign(handlers, { selectCompany, changeSlide, setSlide, setExperienceCategory, toggleAccordion, selectTraining });

  return () => {
    cleanups.forEach((fn) => fn());
    Object.keys(handlers).forEach((key) => delete handlers[key]);
  };
}
