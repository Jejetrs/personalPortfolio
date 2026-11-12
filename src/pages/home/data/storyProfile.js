export const ROLES = [
  { key: "all", label: "Full Picture" },
  { key: "ba", label: "Business Analysis" },
  { key: "pm", label: "Product & Project Management" },
  { key: "ux", label: "UI/UX Design" },
  { key: "dev", label: "Developer & Data" },
  { key: "ai", label: "AI & ML Engineering" },
];

export const CHAPTER_ROLES = [["dev", "pm"], ["dev", "ux", "ai"], ["pm", "ba", "dev", "ai"], ["ux", "pm", "ba"]];

export const FIT = {
  all: {
    title: "01. Full Picture",
    headline: "I connect the problem, the people, and the solution.",
    whatBring: "My experience spans business and user research, product design, development, and team coordination. I bring these perspectives together to understand problems, shape practical solutions, and support their implementation and evaluation.",
    proof: [
      "Led a five-person LeadSight capstone team across Front-End, Back-End, and Machine Learning development.",
      "Evaluated Nusca with 15 users, achieving an average UAT score of 4.55/5.",
      "Audited and refined 30+ INAPROC design system components during my designer internship.",
    ],
    growing: "I'm building on my internship and project experience to contribute to larger, real-world digital products. I bring curiosity, technical understanding, and a willingness to take responsibility while continuously improving.",
    links: [
      { label: "LeadSight", to: "leadsight-project-card" },
      { label: "Nusca", to: "nusca-project-card-1" },
      { label: "INAPROC", to: "inaproc-project-card" },
    ],
  },
  ba: {
    title: "02. Business Analysis",
    headline: "Turning complex problems into clearer product requirements.",
    whatBring: "I enjoy understanding why a problem exists before exploring solutions. I connect user needs, business objectives, and technical considerations to help define requirements and identify opportunities for improvement.",
    proof: [
      "Analyzed banking sales challenges and lead prioritization needs to support LeadSight's product scope and dashboard requirements.",
      "Applied company profiling, SWOT analysis, and Business Model Canvas to explore business opportunities for Trustee.",
      "Evaluated Nusca's user feedback, identifying trust and result transparency as areas for improvement.",
    ],
    growing: "I'm strengthening my experience in formal requirements documentation, business process modeling, and enterprise systems, building on practical analysis and product development experience.",
    links: [
      { label: "LeadSight", to: "leadsight-business-analysis-card" },
      { label: "Trustee", to: "trustee-business-card" },
      { label: "Nusca", to: "nusca-project-card-1" },
    ],
  },
  pm: {
    title: "03. Product & Project Management",
    headline: "Connecting product goals with coordinated execution.",
    whatBring: "I approach product development by understanding the problem, defining priorities, and keeping teams aligned around shared goals. My technical background helps me consider development dependencies, feasibility, and testing throughout the process.",
    proof: [
      "Led a five-person LeadSight capstone team, coordinating a six-week development plan across three technical workstreams.",
      "Supported product implementation, integration, and testing, with all 16 documented functional test scenarios passing.",
      "Coordinated business and AI team discussions during Trustee's product concept development and pitching preparation.",
    ],
    growing: "I'm developing deeper experience in product ownership, backlog management, and performance-driven product decisions, building on project planning and cross-functional delivery experience.",
    links: [
      { label: "LeadSight", to: "leadsight-project-card" },
      { label: "Trustee", to: "trustee-business-card" },
      { label: "AiDorse", to: "pm-arkavidia-card" },
    ],
  },
  ux: {
    title: "04. UI/UX Design",
    headline: "Designing experiences that make complex things easier to understand.",
    whatBring: "I combine user research, analytical thinking, and visual design to create interfaces that are clear, usable, and aligned with product goals. I consider not only how an interface looks, but also how people understand and interact with it.",
    proof: [
      "Analyzed INAPROC landing page pain points, researched website references, and contributed to redesign exploration.",
      "Audited and refined 30+ design system components to improve consistency and developer handoff.",
      "Designed and evaluated Nusca with 15 users, achieving an average UAT score of 4.55/5, while identifying opportunities for improvement.",
    ],
    growing: "I'm expanding my experience with larger-scale products, complex user journeys, and design decisions shaped by ongoing user feedback and business needs.",
    links: [
      { label: "INAPROC", to: "inaproc-project-card" },
      { label: "Nusca", to: "nusca-project-card-1" },
      { label: "AOShuttle", to: "aoshuttle-project-card" },
    ],
  },
  dev: {
    title: "05. Developer & Data",
    headline: "Bringing ideas closer to technical reality.",
    whatBring: "My Informatics background allows me to understand how interfaces, APIs, databases, and AI models work together. I enjoy building functional applications, analyzing technical problems, and connecting product requirements with implementation.",
    proof: [
      "Developed React-based interfaces and integrated backend APIs for LeadSight's predictive sales dashboard.",
      "Built Nusca using React and OCR-based AI models, connecting image analysis with a user-facing application.",
      "Developed and tested REST APIs through backend projects and gained hands-on experience with databases and machine learning.",
    ],
    growing: "I'm continuing to deepen my knowledge of software architecture, database management, and production-level development while applying my technical foundation to real product challenges.",
    links: [
      { label: "LeadSight", to: "leadsight-project-card" },
      { label: "Nusca", to: "nusca-developer-project-card" },
      { label: "OpenMusic V3", to: "openmusic-api-project-card" },
    ],
  },
  ai: {
    title: "06. AI & ML ENGINEERING",
    headline: "Turning models into something people can actually use.",
    whatBring: "I train models and care just as much about what happens next: how they are evaluated, wired into an application and explained to the people who use them. I have worked with computer vision, NLP and classification, and I judge results by recall and failure cases, not accuracy alone.",
    proof: [
      "Built the OCR service behind Nusca and connected it to a React app, reaching 93.66% field accuracy on 52 held-out images.",
      "Compared models instead of defaulting to one: CNN with Word2Vec against TF-IDF for WhatsApp sentiment (99.46% test accuracy), and KNN, Logistic Regression and Random Forest for diabetes risk (99.67% accuracy).",
      "Flagged that LeadSight’s 87.5% accuracy hid 38% recall on the priority class, and tracked data imbalance as a project risk.",
    ],
    growing: "I’m deepening my experience in production deployment, model monitoring and larger real-world datasets, since most of my projects so far use public or small datasets.",
    links: [
      { label: "Nusca", to: "nusca-developer-project-card" },
      { label: "LeadSight", to: "leadsight-project-card" },
      { label: "Smart Focus Alert", to: "smart-focus-alert-card-2" },
    ],
  },
};
