/* The five skill pillars shown in "Where My Skills Connect". */
export const pillarsData = [
  {
    index: 0,
    phaseBadge: "01 · DISCOVER",
    title: "Business & User Discovery",
    description: "Analyze business needs, market trends, competitors, and user insights to identify problems and product opportunities.",
    bullets: [
      "Analyze business context, market trends, and competitors",
      "Study user needs, pain points, and behaviors",
      "Turn research findings into product opportunities"
    ],
    coreSkills: ["User Research", "Interviews & Surveys", "Pain Point Analysis", "Market Research", "Customer Profiling", "SWOT Analysis", "Business Model Canvas"],
    tools: ["FigJam", "Google Sheets", "Excel", "Word"],
    iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>`,
    iconBg: "bg-indigo-50 text-primary border-indigo-100",
    bulletColor: "bg-primary"
  },
  {
    index: 1,
    phaseBadge: "02 · DEFINE",
    title: "Product Definition",
    description: "Translate business goals and user needs into clear requirements, process flows, and actionable product solutions.",
    bullets: [
      "Map requirements, scope, and priorities",
      "Model user flows and business processes",
      "Frame problems and solutions with product thinking"
    ],
    coreSkills: ["Requirements Mapping", "User Flows", "Feature Planning", "MVP Scoping", "Task Prioritization", "Technical Feasibility"],
    tools: ["Figma", "FigJam", "Google Sheets", "Notion", "Canva", "Word"],
    iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect height="4" rx="1" width="6" x="9" y="3"></rect><path d="M9 12h6"></path><path d="M9 16h6"></path></svg>`,
    iconBg: "bg-violet-50 text-violet-700 border-violet-100",
    bulletColor: "bg-violet-600"
  },
  {
    index: 2,
    phaseBadge: "03 · DESIGN",
    title: "UI/UX Design",
    description: "Design intuitive, responsive digital experiences through wireframes, interactive prototypes, and reusable design systems.",
    bullets: [
      "Create wireframes and interactive prototypes",
      "Design responsive layouts across screen sizes",
      "Build reusable design systems and design tokens"
    ],
    coreSkills: ["Wireframing", "Prototyping", "Information Architecture", "Responsive UI", "Design Systems", "Design Tokens", "Design Handoff"],
    tools: ["Figma", "FigJam"],
    iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
    iconBg: "bg-teal-50 text-teal-700 border-teal-100",
    bulletColor: "bg-teal-600"
  },
  {
    index: 3,
    phaseBadge: "04 · BUILD & INTEGRATE",
    title: "Full-Stack & AI Development",
    description: "Build, integrate, and deploy digital applications using frontend, backend, databases, and AI/ML technologies.",
    bullets: [
      "Develop responsive frontend and backend features",
      "Integrate REST APIs, databases, and services",
      "Train and integrate AI/ML models into product workflows"
    ],
    coreSkills: ["Frontend Development", "Backend Development", "REST API Integration", "Database Integration", "Data Preprocessing", "ML Model Evaluation", "AI Integration"],
    tools: ["React.js", "JavaScript", "Node.js", "Python", "PostgreSQL", "Git & GitHub", "Tailwind", "TensorFlow", "Computer Vision", "PyTorch", "REST API"],
    iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><circle cx="12" cy="12" r="2"></circle></svg>`,
    iconBg: "bg-blue-50 text-blue-700 border-blue-100",
    bulletColor: "bg-blue-600"
  },
  {
    index: 4,
    phaseBadge: "05 · VALIDATE & DELIVER",
    title: "Validation & Product Delivery",
    description: "Validate product usability and functionality, coordinate team progress, and support delivery through testing and documentation.",
    bullets: [
      "Run usability, black-box, and user acceptance tests",
      "Coordinate team timelines, milestones, and progress",
      "Document deliverables and support handoffs"
    ],
    coreSkills: ["Usability Testing", "User Acceptance Testing", "Black-Box Testing", "Feedback Analysis", "Milestone Tracking", "Team Coordination", "Project Documentation"],
    tools: ["Google Sheets", "Excel", "PowerPoint", "Notion", "Word", "Canva"],
    iconSvg: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m9 12 2 2 4-4"></path><path d="M12 3 5 6v5c0 4.5 3 7 7 10 4-3 7-5.5 7-10V6l-7-3z"></path></svg>`,
    iconBg: "bg-amber-50 text-amber-700 border-amber-100",
    bulletColor: "bg-amber-600"
  }
]

/* Extra display data for the journey list: short phase label, three keywords, accent colour. */
export const pillarMeta = [
  { phase: "Discover", keywords: "Market • Competitors • Users", accent: "#4f46e5", soft: "#eef2ff", edge: "#c7d2fe" },
  { phase: "Define", keywords: "Requirements • Flows • Scope", accent: "#7c3aed", soft: "#f5f3ff", edge: "#ddd6fe" },
  { phase: "Design", keywords: "Wireframes • Prototypes • UI", accent: "#0d9488", soft: "#f0fdfa", edge: "#99f6e4" },
  { phase: "Build & Integrate", keywords: "Frontend • Backend • AI/ML", accent: "#2563eb", soft: "#eff6ff", edge: "#bfdbfe" },
  { phase: "Validate & Deliver", keywords: "Testing • Docs • Teamwork", accent: "#d97706", soft: "#fffbeb", edge: "#fde68a" },
];
