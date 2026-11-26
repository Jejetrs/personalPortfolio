/* Projects that cover more than one field. Each case-study card keeps its own field (category);
   a group ties the cards of one project together so the project can be read as ONE card, in order,
   under every field it belongs to. */
export const FIELD_LABELS = {
  analytics: { label: "IT Product/Business Analytics", short: "Business Analytics", tone: "amber" },
  team: { label: "Project Management & Leadership", short: "Project Management", tone: "cyan" },
  uiux: { label: "UI/UX Design", short: "UI/UX Design", tone: "indigo" },
  aiml: { label: "Machine Learning/AI Engineering", short: "AI / ML", tone: "violet" },
  developer: { label: "Developer", short: "Developer", tone: "sky" },
};
const FIELD_ORDER = ["analytics", "team", "uiux", "aiml", "developer"];

/* Every group has an overview (shown once, above the chapters) with the project's main image or video.
   A chapter's `hide` lists the elements it would otherwise repeat from that overview or from an earlier chapter. */
const A = "/assets";
export const GROUPS = [
  {
    slug: "trustee",
    overview: { kind: "video", driveId: "1KmV3Y6WtxhT6N3Vzw_N_4ln9kGBPIGPC", poster: `${A}/trustee/Profile%20Trustee.jpg`, title: "Trustee solution pitch", caption: "The Telkom Digistar 2026 solution pitch for Team 32.", accent: "#4f46e5" },
    title: "Trustee",
    subtitle: "Trusted Review Intelligence for Shopee",
    summary:
      "A Telkom Digistar 2026 proposal for review integrity on Shopee. It starts with business research, SWOT and a business model, then follows how Team 32 was coordinated from planning to the final pitch.",
    parts: [
      { id: "trustee-business-card", hide: [".tr-video"], chapter: "Business analysis", lead: "Market research, competitor analysis, SWOT findings, and business-model decisions." },
      { id: "pm-leadership-card", chapter: "Project management", lead: "Team coordination, task ownership, progress tracking, and pitch preparation." },
    ],
  },
  {
    slug: "leadsight",
    overview: { kind: "video", driveId: "1YcuRaOq3cR49pWVPmXh29hRSJCqcGhOX", poster: `${A}/experience/ASAH%202025/Leadsight%20Profile.png`, title: "LeadSight capstone presentation", caption: "The ASAH capstone walkthrough: the sales-lead problem, the scoring approach and the dashboard.", accent: "#6d28d9" },
    title: "LeadSight",
    subtitle: "Lead prioritization for banking sales",
    summary:
      "The ASAH capstone concept for banking sales teams: predictive lead scoring, customer segmentation and campaign analytics, from the business case, through six weeks of delivery planning, to the dashboard.",
    parts: [
      { id: "leadsight-business-analysis-card", hide: [".lba-video-highlight"], chapter: "Business analysis", lead: "Target users, competitor positioning, value proposition, and proposed rollout metrics." },
      { id: "pm-asah-card", chapter: "Project management", lead: "Six-week workstreams, dependencies, milestones, and delivery checkpoints." },
      { id: "leadsight-project-card", chapter: "Front-end development", lead: "React dashboard structure, customer-priority views, campaign charts, and interaction patterns." },
    ],
  },
  {
    slug: "nusca",
    overview: { kind: "image", src: `${A}/projects/UI%20UX/nusca/Mockup.webp`, alt: "Nusca app mockup", title: "Nusca app preview", caption: "The scanner experience, from label capture to the Nutri-Level result." },
    title: "Nusca",
    subtitle: "Nutri-Level scanner for packaged drinks",
    summary:
      "A web app that turns a photo of a drink's nutrition label into a Nutri-Level A–D grade: the experience and its evaluation, the AI pipeline behind the grade, and the full-stack build that ships it.",
    parts: [
      { id: "nusca-project-card-1", chapter: "UI/UX research & design", lead: "User research, scanning flows, prototype decisions, and usability evaluation." },
      { id: "nusca-project-card-2", chapter: "AI / ML pipeline", lead: "Nutrition-panel localization, OCR extraction, field normalization, and rule-based grading." },
      { id: "nusca-developer-project-card", chapter: "Full-stack development", lead: "React-to-FastAPI integration, scan/result flow, and deployment implementation." },
    ],
  },
  {
    slug: "smart-focus-alert",
    overview: { kind: "image", src: `${A}/projects/UI%20UX/smart%20focus%20alert/Desain%20Mockup%20Portfolio.jpg`, alt: "Smart Focus Alert portfolio mockup", title: "Smart Focus Alert preview", caption: "The web app that watches focus in real time and alerts when attention drops." },
    title: "Smart Focus Alert",
    subtitle: "Real-time focus monitoring for online learning",
    summary:
      "An AI-powered web app that monitors focus in real time with computer vision and MediaPipe Face Mesh: the user research and design, the detection model, and the Flask application with spoken alerts and session reports.",
    parts: [
      { id: "smart-focus-alert-card-1", chapter: "UI/UX research & design", lead: "User research, focus-state feedback, monitoring flows, and usability evaluation." },
      { id: "smart-focus-alert-card-2", hide: [".project-image-card"], chapter: "AI / ML detection", lead: "Face Mesh landmarks, attention-state signals, thresholds, and alert-trigger evaluation." },
      { id: "smart-focus-alert-developer-card", chapter: "Full-stack development", lead: "Flask endpoints, MediaPipe/OpenCV processing, live alerts, and session reports." },
    ],
  },
  {
    slug: "aisee",
    overview: { kind: "image", src: `${A}/projects/UI%20UX/aisee/Mockup.webp`, alt: "AiSee mobile app mockup", title: "AiSee mobile preview", caption: "The mobile-first experience for brand and creator collaboration." },
    title: "AiSee",
    subtitle: "From the AiDorse hackathon concept to a creator-collaboration app",
    summary:
      "AiSee grew out of the AiDorse concept: first prioritized and planned under a 24-hour hackathon deadline, then designed as a mobile-first experience for brand and creator partnerships.",
    parts: [
      { id: "pm-arkavidia-card", chapter: "Project management · the AiDorse concept", lead: "24-hour scope definition, MVP prioritization, team responsibilities, and pitch delivery." },
      { id: "aisee-mobile-card", chapter: "UI/UX design · mobile", lead: "Creator and brand journeys, mobile interface decisions, and campaign-tracking flows." },
    ],
  },
];

const byCard = new Map();
GROUPS.forEach((group) => group.parts.forEach((part) => byCard.set(part.id, { group, part })));

export const groupOfCard = (cardId) => byCard.get(cardId)?.group || null;
export const partOfCard = (cardId) => byCard.get(cardId)?.part || null;
export const groupFields = (group, categoryOf) => FIELD_ORDER.filter((field) => group.parts.some((part) => categoryOf(part.id) === field));
