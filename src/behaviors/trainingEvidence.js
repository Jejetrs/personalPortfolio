/* Training evidence */

const enc = (path) => encodeURI(path).replace(/'/g, '%27');
const ASAH = '/assets/experience/ASAH 2025/';
const CAMP = '/assets/experience/Coding Camp Cohort 2025/';
const DIGI = '/assets/experience/Digistar Class 2024/';
const SIC = '/assets/experience/Samsung Innovation Campus/';

const drivePreview = (id) => `https://drive.google.com/file/d/${id}/preview?rm=minimal`;

const EVIDENCE = {
  1: {
    group: 'asah',
    heading: 'Documentation',
    lead: 'The LeadSight capstone from start to finish: the pitch, the team behind it and the paperwork that backs it up.',
    video: {
      id: '1YcuRaOq3cR49pWVPmXh29hRSJCqcGhOX',
      poster: ASAH + 'Leadsight Profile.png',
      title: 'LeadSight capstone presentation',
      text: 'Watch how the team framed the sales-lead problem, scored leads with machine learning and turned it into a working dashboard.',
    },
    project: { id: 'leadsight-project-card', label: 'Explore the LeadSight project' },
    tiles: [
      { src: ASAH + 'Leadsight Profile.png', kicker: 'Product', title: 'LeadSight at a glance', text: 'The product, the problem it solves and the team in one overview.', size: 'wide' },
      { src: ASAH + 'Pitching.jpeg', kicker: 'Pitch day', title: 'Presenting LeadSight', text: 'Taking the capstone to the final pitch.', size: 'tall' },
      { src: ASAH + 'Capstone Team Discuss.jpeg', kicker: 'Teamwork', title: 'Product and tech, one table', text: 'Working through scope and technical choices together.' },
      { src: ASAH + 'Capstone Team Meeting Progress.jpeg', kicker: 'Leadership', title: 'Progress check-in', text: 'Keeping product, design and engineering moving in the same direction.' },
      { src: ASAH + 'Advisor Meeting.png', kicker: 'Mentorship', title: 'Advisor review', text: 'Getting feedback on scope and progress from our advisor.' },
      { src: ASAH + 'Leadsight Team Profile.jpg', kicker: 'Team', title: 'The LeadSight team', text: 'The people who built it.' },
      {
        src: ASAH + 'Distinction Graduate1.jpeg', kicker: 'Milestone', title: 'Graduated with Distinction', text: 'Three moments from finishing the program at the top level.', size: 'full',
        gallery: [ASAH + 'Distinction Graduate1.jpeg', ASAH + 'Distinction Graduate2.jpeg', ASAH + 'Distinction Graduate3.jpeg'],
      },
    ],
    docs: [
      { url: ASAH + 'Dokumentasi UserGuide  LeadSight.pdf', title: 'LeadSight User Guide', text: 'A step-by-step guide to every feature of the dashboard.' },
    ],
    note: 'Selected from my final report. Meeting participants and private course-account details are left out.',
  },
  2: {
    group: 'codingcamp',
    heading: 'Documentation',
    lead: 'Dermalyze, the facial skin type classifier, shown through the project video and the people who guided it.',
    video: {
      id: '1IfzQ0AFbaYeiIq1m1gpnDcEA2sZB08jx',
      poster: CAMP + 'Profile Dermalyze.png',
      title: 'Dermalyze project presentation',
      text: 'See how the team trained and evaluated the skin type models and what we learned along the way.',
    },
    project: { id: 'skin-classification-card', label: 'Explore the Dermalyze project' },
    tiles: [
      { src: CAMP + 'Profile Dermalyze.png', kicker: 'Product', title: 'Dermalyze at a glance', text: 'The idea, the team and the skin types it classifies.', size: 'wide' },
      { src: CAMP + 'Advisor Meeting.jpg', kicker: 'Mentorship', title: 'Advisor review', text: 'Reviewing the model results and next steps with our Coding Camp advisor.', size: 'wide' },
    ],
    docs: [],
    note: 'Participant identities are not shown.',
  },
  3: {
    group: 'digistar',
    heading: 'Documentation',
    lead: 'From research maps to a design system and final mockups: how CampaignDeck Master took shape.',
    project: { id: 'campaign-deck-master-card', label: 'Explore CampaignDeck Master' },
    feature: { title: 'CampaignDeck Master', text: 'A design-stage concept for running WhatsApp and email campaigns in one clear flow. Research, system and mockups are below; the full case study is one click away.', cover: DIGI + 'Project Profile CDM.webp' },
    tiles: [
      { src: DIGI + 'UI Design.png', kicker: 'Interface', title: 'UI design', text: 'The screens that bring the campaign workflow together.', size: 'wide' },
      { src: DIGI + 'User Flow OCA 35.webp', kicker: 'Research', title: 'User flow', text: 'Mapping every step from setup to sending a campaign.', size: 'wide' },
      { src: DIGI + 'Mini Design System.png', kicker: 'System', title: 'Mini design system', text: 'Shared styles that keep every screen consistent.' },
      { src: DIGI + 'Component Figma Design.png', kicker: 'Components', title: 'Figma components', text: 'Reusable building blocks for faster design.' },
      {
        src: DIGI + 'Mockup Design1.jpg', kicker: 'Final mockups', title: 'Mockup set', text: 'Four finished mockups, viewed together.', size: 'wide',
        gallery: [DIGI + 'Mockup Design1.jpg', DIGI + 'Mockup Design2.jpg', DIGI + 'Mockup Design3.jpg', DIGI + 'Mockup Design4.jpg'],
      },
    ],
    docs: [
      { url: DIGI + 'Empathy Map.pdf', title: 'Empathy map', text: 'What users think, feel and need.' },
      { url: DIGI + 'Affinity Diagram - OCA 35.pdf', title: 'Affinity diagram', text: 'Research notes grouped into clear themes.' },
      { url: DIGI + 'Customer Journey Map - OCA 35.pdf', title: 'Customer journey map', text: 'Where users get stuck and where we can help.' },
    ],
    note: 'Design-stage concept from the Digistar Class 2024 team project.',
  },
  4: {
    group: 'samsung',
    heading: 'Documentation',
    lead: 'AgroSense on the bench and on stage: a working hydroponic prototype, team mentoring and the final pitch.',
    video: {
      id: '1ZCeQb2X0lZQ7DzovJzCLxNJg3BcT7fQC',
      poster: SIC + 'Product Thinking.png',
      title: 'Samsung Innovation Campus project video',
      text: 'Watch the AgroSense project presentation and the team journey from prototype to pitch.',
    },
    tiles: [
      {
        src: SIC + 'Agrosense IoT Hardware1.jpeg', kicker: 'Prototype', title: 'AgroSense IoT hardware', text: 'The ESP32 sensor prototype from four angles.', size: 'wide',
        gallery: [SIC + 'Agrosense IoT Hardware1.jpeg', SIC + 'Agrosense IoT Hardware2.jpeg', SIC + 'Agrosense IoT Hardware3.png', SIC + 'Agrosense IoT Hardware4.jpeg'],
      },
      {
        src: SIC + 'Pitching Day1.jpeg', kicker: 'Final pitch', title: 'Pitching day', text: 'Presenting AgroSense to the judges.', size: 'tall',
        gallery: [SIC + 'Pitching Day1.jpeg', SIC + 'Pitching Day2.jpeg', SIC + 'Pitching Day3.jpeg'],
      },
      { src: SIC + 'Mentoring Session.jpeg', kicker: 'Mentorship', title: 'Mentoring session', text: 'Feedback that sharpened the product.' },
      { src: SIC + 'Product Thinking.png', kicker: 'Product thinking', title: 'From idea to product', text: 'Turning a farming problem into a clear product direction.' },
      { src: SIC + 'Team Profile.jpeg', kicker: 'Team', title: 'AgroSense team', text: 'The team behind the Samsung Innovation Campus project.' },
    ],
    docs: [],
    note: 'Original prototype, mentoring and pitching photos from Samsung Innovation Campus.',
  },
};

const esc = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function renderTile(tile, group, index) {
  const gallery = (tile.gallery || [tile.src]).map((src, i) => ({
    src: enc(src),
    alt: `${tile.title}${tile.gallery ? ` (${i + 1} of ${tile.gallery.length})` : ''}`,
    title: tile.title,
    caption: tile.text,
  }));
  const count = tile.gallery ? `<span class="ev-count">${tile.gallery.length} photos</span>` : '';
  return `
    <button type="button" class="ev-tile ev-${tile.size || 'sm'}" data-training-doc="${group}" data-training-doc-index="${index}" data-training-gallery="${esc(JSON.stringify(gallery))}" aria-label="Open ${esc(tile.title)}">
      <img loading="lazy" decoding="async" src="${enc(tile.src)}" alt="${esc(tile.title)}">
      ${count}
      <span class="ev-caption"><span class="ev-kicker">${esc(tile.kicker)}</span><strong>${esc(tile.title)}</strong><span class="ev-text">${esc(tile.text)}</span></span>
    </button>`;
}

function renderVideo(video, project) {
  const button = project
    ? `<a class="ev-project-btn" href="/?project=${project.id}#selected-works">${esc(project.label)}<span aria-hidden="true">→</span></a>`
    : '';
  return `
    <div class="ev-feature">
      <div class="ev-feature-copy">
        <span class="ev-badge"><i aria-hidden="true">▶</i> Capstone highlight</span>
        <h4>${esc(video.title)}</h4>
        <p>${esc(video.text)}</p>
        ${button}
      </div>
      <div class="ev-player" data-evidence-video="${drivePreview(video.id)}" data-video-title="${esc(video.title)}">
        <button type="button" class="ev-play" aria-label="Play video: ${esc(video.title)}">
          <img src="${enc(video.poster)}" alt="" loading="lazy">
          <span aria-hidden="true">▶</span>
        </button>
      </div>
    </div>`;
}

function renderProjectOnly(project, feature) {
  return `
    <div class="ev-feature">
      <div class="ev-feature-copy">
        <span class="ev-badge">Capstone project</span>
        <h4>${esc(feature.title)}</h4>
        <p>${esc(feature.text)}</p>
        <a class="ev-project-btn" href="/?project=${project.id}#selected-works">${esc(project.label)}<span aria-hidden="true">→</span></a>
      </div>
      <div class="ev-player"><img class="ev-cover" src="${enc(feature.cover)}" alt="${esc(feature.title)} project overview" loading="lazy"></div>
    </div>`;
}

function renderDocs(docs) {
  if (!docs.length) return '';
  return `
    <div class="ev-docs">
      <p class="ev-docs-title">Documents · open without leaving the page</p>
      <div class="ev-docs-grid">
        ${docs.map((doc) => `
          <button type="button" class="ev-doc" data-evidence-pdf="${enc(doc.url)}" data-doc-title="${esc(doc.title)}">
            <span class="ev-doc-icon material-symbols-outlined" aria-hidden="true">picture_as_pdf</span>
            <span><strong>${esc(doc.title)}</strong><small>${esc(doc.text)}</small></span>
            <span class="ev-doc-open" aria-hidden="true">Open</span>
          </button>`).join('')}
      </div>
    </div>`;
}

function summaryLine(data) {
  const parts = [];
  if (data.video) parts.push('Video');
  parts.push(`${data.tiles.length} photos`);
  if (data.docs.length) parts.push(`${data.docs.length} documents`);
  return parts.join(' · ');
}

export function renderTrainingEvidence(id) {
  const data = EVIDENCE[id];
  if (!data) return '';
  const itemCount = data.tiles.length + data.docs.length + (data.video ? 1 : 0);
  const feature = data.video
    ? renderVideo(data.video, data.project)
    : data.project && data.feature ? renderProjectOnly(data.project, data.feature) : '';
  return `
    <details class="ev" aria-label="Documentation and evidence">
      <summary class="ev-summary">
        <span class="ev-sum-icon material-symbols-outlined" aria-hidden="true">photo_library</span>
        <span class="ev-sum-text"><strong>Documentation &amp; Evidence</strong><small>${esc(summaryLine(data))}</small></span>
        <span class="ev-sum-stack" aria-hidden="true">${data.tiles.slice(0, 3).map((tile) => `<img src="${enc(tile.thumb || tile.src)}" alt="" loading="lazy" decoding="async">`).join('')}</span>
        <span class="ev-sum-count">${itemCount}</span>
        <span class="ev-sum-cta" aria-hidden="true"><span class="ev-label-open">View</span><span class="ev-label-close">Hide</span><i>⌄</i></span>
      </summary>
      <div class="ev-content">
        <p class="ev-lead">${esc(data.lead)}</p>
        ${feature}
        <div class="ev-grid">${data.tiles.map((tile, index) => renderTile(tile, data.group, index)).join('')}</div>
        ${renderDocs(data.docs)}
        <p class="ev-note">${esc(data.note)}</p>
      </div>
    </details>`;
}

export function bindTrainingEvidence(root, openPdf) {
  const onClick = (event) => {
    const play = event.target.closest?.('[data-evidence-video] .ev-play');
    if (play) {
      const player = play.closest('[data-evidence-video]');
      const frame = document.createElement('iframe');
      frame.src = player.dataset.evidenceVideo;
      frame.title = player.dataset.videoTitle || 'Project video';
      frame.allow = 'autoplay; fullscreen; picture-in-picture';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'no-referrer';
      frame.setAttribute('sandbox', 'allow-forms allow-scripts allow-same-origin');
      const guard = document.createElement('span');
      guard.className = 'ev-player-source-guard';
      guard.setAttribute('aria-hidden', 'true');
      player.replaceChildren(frame, guard);
      return;
    }
    const doc = event.target.closest?.('[data-evidence-pdf]');
    if (doc) openPdf({ title: doc.dataset.docTitle, url: doc.dataset.evidencePdf, type: 'pdf' }, doc);
  };
  root.addEventListener('click', onClick);
  return () => root.removeEventListener('click', onClick);
}
