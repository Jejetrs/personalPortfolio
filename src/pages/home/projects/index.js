import TrusteeBusinessCard from './TrusteeBusinessCard.jsx';
import PmLeadershipCard from './PmLeadershipCard.jsx';
import InaprocProjectCard from './InaprocProjectCard.jsx';
import CampaignDeckMasterCard from './CampaignDeckMasterCard.jsx';
import NuscaProjectCard1 from './NuscaProjectCard1.jsx';
import SmartFocusAlertCard1 from './SmartFocusAlertCard1.jsx';
import AiseeMobileCard from './AiseeMobileCard.jsx';
import CivisionProjectCard from './CivisionProjectCard.jsx';
import AiseeWebsiteCard from './AiseeWebsiteCard.jsx';
import AoshuttleProjectCard from './AoshuttleProjectCard.jsx';
import NuscaProjectCard2 from './NuscaProjectCard2.jsx';
import SmartFocusAlertCard2 from './SmartFocusAlertCard2.jsx';
import BeautyGlossaryCard from './BeautyGlossaryCard.jsx';
import BikesharingCard from './BikesharingCard.jsx';
import BankFraudCard from './BankFraudCard.jsx';
import WhatsappSentimentCard from './WhatsappSentimentCard.jsx';
import DiabetesRiskCard from './DiabetesRiskCard.jsx';
import MovieRecommenderCard from './MovieRecommenderCard.jsx';
import SkinClassificationCard from './SkinClassificationCard.jsx';
import NotesApplicationProjectCard from './NotesApplicationProjectCard.jsx';
import BookshelfApiProjectCard from './BookshelfApiProjectCard.jsx';
import OpenmusicApiProjectCard from './OpenmusicApiProjectCard.jsx';
import NuscaDeveloperProjectCard from './NuscaDeveloperProjectCard.jsx';
import SmartFocusAlertDeveloperCard from './SmartFocusAlertDeveloperCard.jsx';
import LeadsightProjectCard from './LeadsightProjectCard.jsx';
import MovieReviewProjectCard from './MovieReviewProjectCard.jsx';

/** Project showcase entries, in display order. `Card` renders the full case-study card. */
export const PROJECTS = [
  {
    id: "trustee-business-card",
    category: "analytics",
    title: "Trustee — Trusted Review Intelligence",
    description: "Business research, SWOT, and a business model behind an AI-assisted review integrity proposal for Shopee, from Telkom Digistar 2026.",
    images: ["/assets/trustee/Profile%20Trustee.jpg"],
    Card: TrusteeBusinessCard,
  },
  {
    id: "pm-leadership-card",
    category: "team",
    title: "Project Management & Team Leadership",
    description: "How I plan, track and hand off work as a project manager, product manager and team leader across three capstone and competition teams.",
    images: ["/assets/events/B2B%20DCI%202026/Team%20Monitoring.png"],
    Card: PmLeadershipCard,
  },
  {
    id: "inaproc-project-card",
    category: "uiux",
    title: "INAPROC",
    description: "A digital product experience within the INAPROC ecosystem, focusing on design system refinement, component development, and landing page exploration.",
    images: [],
    Card: InaprocProjectCard,
  },
  {
    id: "campaign-deck-master-card",
    category: "uiux",
    title: "Campaign Deck Master",
    description: "Campaign Deck Master is an enterprise messaging campaign web application designed to optimize WhatsApp and Email broadcast communication for businesses, inspired by OCA BLAST by Telkom.",
    images: [],
    Card: CampaignDeckMasterCard,
  },
  {
    id: "nusca-project-card-1",
    category: "uiux",
    title: "Nusca",
    description: "A web application designed to help users scan packaged drink nutrition labels and instantly understand Nutri-Level results through an accessible, human-centered experience.",
    images: [],
    Card: NuscaProjectCard1,
  },
  {
    id: "smart-focus-alert-card-1",
    category: "uiux",
    title: "Smart Focus Alert",
    description: "An AI-powered web application that monitors user focus in real time using computer vision and MediaPipe Face Mesh, helping learners stay aware of distractions and improve productivity during online learning.",
    images: [],
    Card: SmartFocusAlertCard1,
  },
  {
    id: "aisee-mobile-card",
    category: "uiux",
    title: "AiSee",
    description: "AiSee is the mobile evolution of AiDorse, transforming influencer collaboration into a mobile-first experience with AI-powered insights, campaign analytics, and transparent brand–creator collaboration workflows.",
    images: [],
    Card: AiseeMobileCard,
  },
  {
    id: "civision-project-card",
    category: "uiux",
    title: "Civision",
    description: "An AI-powered recruitment platform designed to support Human × AI collaboration, enabling transparent, data-driven, and fair candidate evaluation.",
    images: [],
    Card: CivisionProjectCard,
  },
  {
    id: "aisee-website-card",
    category: "uiux",
    title: "AiSee",
    description: "AiSee is a web-based collaboration platform developed as an extension of AiDorse, offering a more complete set of features and analytics to support scalable partnerships between brands and content creators.",
    images: [],
    Card: AiseeWebsiteCard,
  },
  {
    id: "aoshuttle-project-card",
    category: "uiux",
    title: "AOShuttle Mobile App",
    description: "Redesigned a public transportation mobile application of AOShuttle to improve usability and efficiency for daily commuting needs through a clearer structure and user-centered navigation.",
    images: [],
    Card: AoshuttleProjectCard,
  },
  {
    id: "nusca-project-card-2",
    category: "aiml",
    title: "NUSCA",
    description: "An end-to-end AI pipeline for Indonesian packaged-drink nutrition labels that localizes the nutrition panel, extracts 9 nutritional fields, and determines Nutri-Level A–D classification using a deterministic rule-based approach.",
    images: [],
    Card: NuscaProjectCard2,
  },
  {
    id: "smart-focus-alert-card-2",
    category: "aiml",
    title: "Smart Focus Alert",
    description: "A web-based computer vision application that monitors user attention in real time using MediaPipe Face Mesh and triggers automatic alerts when distraction is detected.",
    images: [],
    Card: SmartFocusAlertCard2,
  },
  {
    id: "beauty-glossary-card",
    category: "aiml",
    title: "Beauty Glossary LLM Chatbot",
    description: "A domain-specific LLM chatbot that answers beauty and skincare questions using structured, context-grounded knowledge extracted from trusted web content, helping users get accurate and reliable information.",
    images: [],
    Card: BeautyGlossaryCard,
  },
  {
    id: "bikesharing-card",
    category: "aiml",
    title: "Bike Sharing Demand Analysis",
    description: "An interactive dashboard to analyze bike rental trends using historical data from Capital Bikeshare, enabling users to explore patterns across time, season, weather, and other factors that influence bike demand.",
    images: [],
    Card: BikesharingCard,
  },
  {
    id: "bank-fraud-card",
    category: "aiml",
    title: "Clustering & Classification for Bank Fraud Detection",
    description: "Combined clustering and classification to detect fraudulent transaction patterns in bank data using real-world-style tabular features.",
    images: [],
    Card: BankFraudCard,
  },
  {
    id: "whatsapp-sentiment-card",
    category: "aiml",
    title: "WhatsApp Play Store Sentiment Analysis",
    description: "A sentiment analysis project that classifies WhatsApp user reviews from Google Play into positive, neutral, and negative sentiments to uncover public perception and user experience issues.",
    images: [],
    Card: WhatsappSentimentCard,
  },
  {
    id: "diabetes-risk-card",
    category: "aiml",
    title: "Predictive Analytics for Diabetes Risk",
    description: "A machine learning model to predict the risk of diabetes based on medical features, helping early detection and supporting preventive healthcare actions.",
    images: [],
    Card: DiabetesRiskCard,
  },
  {
    id: "movie-recommender-card",
    category: "aiml",
    title: "Movie Recommendation System",
    description: "A recommendation system that suggests movies based on content similarity and user preferences using a hybrid approach of Content-Based Filtering and Collaborative Filtering.",
    images: [],
    Card: MovieRecommenderCard,
  },
  {
    id: "skin-classification-card",
    category: "aiml",
    title: "Skin Type Classification",
    description: "A deep learning-based image classification model to identify human skin types (oily, dry, or normal) using facial images. The model leverages both RGB and grayscale images to enable personalized skincare recommendations.",
    images: [],
    Card: SkinClassificationCard,
  },
  {
    id: "notes-application-project-card",
    category: "developer",
    title: "Notes Application",
    description: "A React-based notes application for creating, searching, editing, archiving, and managing notes with authentication-oriented flows and API integration.",
    images: ["notes-preview.svg"],
    Card: NotesApplicationProjectCard,
  },
  {
    id: "bookshelf-api-project-card",
    category: "developer",
    title: "BOOKSHELF API",
    description: "A RESTful Bookshelf API built with Node.js and Express for CRUD operations, query filtering, validation, and consistent JSON responses.",
    images: ["bookshelf-preview.svg"],
    Card: BookshelfApiProjectCard,
  },
  {
    id: "openmusic-api-project-card",
    category: "developer",
    title: "OpenMusic API V3",
    description: "A source-based OpenMusic REST API with Hapi.js, PostgreSQL, JWT authentication, Redis caching, RabbitMQ export jobs, and an interactive API simulator.",
    images: ["data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20720%22%3E%3Crect%20width%3D%221200%22%20height%3D%22720%22%20fill%3D%22%23edf5ff%22%2F%3E%3Crect%20x%3D%2270%22%20y%3D%2260%22%20width%3D%221060%22%20height%3D%22600%22%20rx%3D%2226%22%20fill%3D%22%23ffffff%22%20stroke%3D%22%23b8d4f2%22%20stroke-width%3D%225%22%2F%3E%3Crect%20x%3D%2270%22%20y%3D%2260%22%20width%3D%221060%22%20height%3D%2272%22%20rx%3D%2226%22%20fill%3D%22%23f0f5fd%22%2F%3E%3Ccircle%20cx%3D%22115%22%20cy%3D%2296%22%20r%3D%229%22%20fill%3D%22%23ff7c7c%22%2F%3E%3Ccircle%20cx%3D%22145%22%20cy%3D%2296%22%20r%3D%229%22%20fill%3D%22%23ffcc67%22%2F%3E%3Ccircle%20cx%3D%22175%22%20cy%3D%2296%22%20r%3D%229%22%20fill%3D%22%2352c988%22%2F%3E%3Ctext%20x%3D%22175%22%20y%3D%22220%22%20font-family%3D%22Arial%22%20font-size%3D%2238%22%20font-weight%3D%22800%22%20fill%3D%22%23182d4a%22%3EOpenMusic%20API%20V3%3C%2Ftext%3E%3Ctext%20x%3D%22175%22%20y%3D%22270%22%20font-family%3D%22Arial%22%20font-size%3D%2218%22%20font-weight%3D%22700%22%20fill%3D%22%232867c4%22%3EBACKEND%20ENGINEERING%3C%2Ftext%3E%3Crect%20x%3D%22175%22%20y%3D%22330%22%20width%3D%22220%22%20height%3D%22220%22%20rx%3D%2218%22%20fill%3D%22%23f4f8ff%22%20stroke%3D%22%23d3e3f8%22%2F%3E%3Crect%20x%3D%22430%22%20y%3D%22330%22%20width%3D%22585%22%20height%3D%22220%22%20rx%3D%2218%22%20fill%3D%22%23101d34%22%2F%3E%3Ctext%20x%3D%22475%22%20y%3D%22390%22%20font-family%3D%22Consolas%22%20font-size%3D%2222%22%20fill%3D%22%23d9eaff%22%3EGET%20%2Falbums%2F%7Bid%7D%3C%2Ftext%3E%3Ctext%20x%3D%22475%22%20y%3D%22440%22%20font-family%3D%22Consolas%22%20font-size%3D%2218%22%20fill%3D%22%2352c988%22%3E200%20OK%20%C2%B7%20JSON%3C%2Ftext%3E%3C%2Fsvg%3E"],
    Card: OpenmusicApiProjectCard,
  },
  {
    id: "nusca-developer-project-card",
    category: "developer",
    title: "Nusca",
    description: "A full-stack web app that turns a photo of a drink's nutrition label into a Nutri-Level A–D grade, with a React client and a FastAPI service running OCR and a Donut model.",
    images: ["nusca-dev-thumb.webp"],
    Card: NuscaDeveloperProjectCard,
  },
  {
    id: "smart-focus-alert-developer-card",
    category: "developer",
    title: "Smart Focus Alert",
    description: "A full-stack web app that detects drowsiness, yawning, lost gaze and absence from a live webcam feed using Flask, MediaPipe and OpenCV, with spoken alerts and PDF/MP4 session reports.",
    images: ["data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20720%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231d1450%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%235b3fd9%22%2F%3E%3C%2FlinearGradient%3E%3CradialGradient%20id%3D%22r%22%20cx%3D%22.5%22%20cy%3D%22.4%22%20r%3D%22.5%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23a78bfa%22%20stop-opacity%3D%22.4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23a78bfa%22%20stop-opacity%3D%220%22%2F%3E%3C%2FradialGradient%3E%3CclipPath%20id%3D%22cl%22%3E%3Cellipse%20cx%3D%22540%22%20cy%3D%22270%22%20rx%3D%2240%22%20ry%3D%2220%22%2F%3E%3C%2FclipPath%3E%3CclipPath%20id%3D%22cr%22%3E%3Cellipse%20cx%3D%22660%22%20cy%3D%22270%22%20rx%3D%2240%22%20ry%3D%2220%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Crect%20width%3D%221200%22%20height%3D%22720%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Crect%20width%3D%221200%22%20height%3D%22720%22%20fill%3D%22url%28%23r%29%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%2278%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2CHelvetica%2Csans-serif%22%20font-size%3D%2222%22%20font-weight%3D%22700%22%20letter-spacing%3D%225%22%20fill%3D%22%23c4b5fd%22%3EFULL-STACK%20%C2%B7%20COMPUTER%20VISION%3C%2Ftext%3E%3Crect%20x%3D%22400%22%20y%3D%22110%22%20width%3D%22400%22%20height%3D%22400%22%20rx%3D%2240%22%20fill%3D%22%2317133a%22%20fill-opacity%3D%22.85%22%20stroke%3D%22%233a3385%22%20stroke-width%3D%223%22%2F%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%2334d399%22%20stroke-width%3D%229%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22M436%20190V146h44%22%2F%3E%3Cpath%20d%3D%22M720%20146h44v44%22%2F%3E%3Cpath%20d%3D%22M764%20430v44h-44%22%2F%3E%3Cpath%20d%3D%22M480%20474h-44v-44%22%2F%3E%3C%2Fg%3E%3Cellipse%20cx%3D%22600%22%20cy%3D%22310%22%20rx%3D%22118%22%20ry%3D%22150%22%20fill%3D%22%23221d5a%22%20stroke%3D%22%236d5fc0%22%20stroke-width%3D%225%22%2F%3E%3Cellipse%20cx%3D%22540%22%20cy%3D%22270%22%20rx%3D%2240%22%20ry%3D%2220%22%20fill%3D%22%23fff%22%2F%3E%3Cellipse%20cx%3D%22660%22%20cy%3D%22270%22%20rx%3D%2240%22%20ry%3D%2220%22%20fill%3D%22%23fff%22%2F%3E%3Cg%20clip-path%3D%22url%28%23cl%29%22%3E%3Ccircle%20cx%3D%22560%22%20cy%3D%22270%22%20r%3D%2217%22%20fill%3D%22%238b7cf6%22%2F%3E%3C%2Fg%3E%3Cg%20clip-path%3D%22url%28%23cr%29%22%3E%3Ccircle%20cx%3D%22680%22%20cy%3D%22270%22%20r%3D%2217%22%20fill%3D%22%238b7cf6%22%2F%3E%3C%2Fg%3E%3Cellipse%20cx%3D%22600%22%20cy%3D%22392%22%20rx%3D%2246%22%20ry%3D%2212%22%20fill%3D%22none%22%20stroke%3D%22%23f472b6%22%20stroke-width%3D%226%22%2F%3E%3Crect%20x%3D%22480%22%20y%3D%22530%22%20width%3D%22240%22%20height%3D%2246%22%20rx%3D%2223%22%20fill%3D%22%238b7cf6%22%2F%3E%3Ctext%20x%3D%22600%22%20y%3D%22561%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2CHelvetica%2Csans-serif%22%20font-size%3D%2220%22%20font-weight%3D%22800%22%20fill%3D%22%2315112e%22%3ENOT%20FOCUSED%3C%2Ftext%3E%3Cg%20font-family%3D%22Consolas%2CMenlo%2Cmonospace%22%20font-weight%3D%22700%22%3E%3Crect%20x%3D%2290%22%20y%3D%22250%22%20width%3D%22210%22%20height%3D%2276%22%20rx%3D%2218%22%20fill%3D%22%2312093a%22%20fill-opacity%3D%22.7%22%20stroke%3D%22%23a78bfa%22%20stroke-opacity%3D%22.6%22%2F%3E%3Ctext%20x%3D%22195%22%20y%3D%22280%22%20text-anchor%3D%22middle%22%20font-size%3D%2216%22%20fill%3D%22%23c4b5fd%22%3EIRIS%20OFFSET%3C%2Ftext%3E%3Ctext%20x%3D%22195%22%20y%3D%22312%22%20text-anchor%3D%22middle%22%20font-size%3D%2228%22%20fill%3D%22%23fff%22%3E4.5%20px%3C%2Ftext%3E%3Crect%20x%3D%22900%22%20y%3D%22250%22%20width%3D%22210%22%20height%3D%2276%22%20rx%3D%2218%22%20fill%3D%22%2312093a%22%20fill-opacity%3D%22.7%22%20stroke%3D%22%23fbbf24%22%20stroke-opacity%3D%22.7%22%2F%3E%3Ctext%20x%3D%221005%22%20y%3D%22280%22%20text-anchor%3D%22middle%22%20font-size%3D%2216%22%20fill%3D%22%23fcd34d%22%3EALERT%3C%2Ftext%3E%3Ctext%20x%3D%221005%22%20y%3D%22312%22%20text-anchor%3D%22middle%22%20font-size%3D%2226%22%20fill%3D%22%23fff%22%3E400%20Hz%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E"],
    Card: SmartFocusAlertDeveloperCard,
  },
  {
    id: "leadsight-project-card",
    category: "developer",
    title: "LeadSight",
    description: "A React dashboard for customer promotion: ML priority labels with probability scores, campaign charts, customer notes and AI insight, built with Vite, TailwindCSS and Recharts.",
    images: ["/assets/projects/leadsight-project-card-e421cf98.webp"],
    Card: LeadsightProjectCard,
  },
  {
    id: "movie-review-project-card",
    category: "developer",
    title: "Movie Review",
    description: "A React frontend for movie discovery: TMDB-powered browsing with filters, debounced search, trailers, and a watchlist, ratings and reviews persisted through Redux.",
    images: ["/assets/projects/movie-review-project-card-2327d862.webp"],
    Card: MovieReviewProjectCard,
  },
];
