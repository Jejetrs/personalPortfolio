const asset = (path) => `/assets/projects/${path}`;
const experienceAsset = (path) => `/assets/experience/${path}`;
const image = (path, title) => ({ src: asset(path), type: 'image', title });
const supportingImage = (path, title) => ({ src: asset(path), type: 'supporting-image', title });
const experienceImage = (path, title) => ({ src: experienceAsset(path), type: 'image', title });
const supportingExperienceImage = (path, title) => ({ src: experienceAsset(path), type: 'supporting-image', title });
const eventImage = (path, title) => ({ src: `/assets/events/${path}`, type: 'image', title });
const pdf = (path, title) => ({ src: asset(path), type: 'pdf', title });
const file = (path, title) => ({ src: asset(path), type: 'file', title });

export const PROJECT_ASSETS = {
  // The leadership card is self-contained: it renders its own galleries and documents.
  "inaproc-project-card": [
    experienceImage("Telkom Designer Intern/Design Revamp.png", "Landing page revamp board"),
    experienceImage("Telkom Designer Intern/Audit E-Katalog.png", "E-Katalog interface audit"),
    experienceImage("Telkom Designer Intern/Variable Audit & Adjusment.png", "Design token and variable audit"),
    experienceImage("Telkom Designer Intern/Example of Component.webp", "Reusable component states"),
    experienceImage("Telkom Designer Intern/Layout Example of E-Katalog Practice.webp", "E-Katalog layout study"),
    experienceImage("Telkom Designer Intern/Crazy Eight for Inaproc Landing Page.png", "Crazy Eight landing page concepts"),
    experienceImage("Telkom Designer Intern/Website Exploration Layout for Revamp.webp", "Website layout benchmark"),
    experienceImage("Telkom Designer Intern/Figma Animation Boolean.png", "Interaction prototype in Figma"),
    experienceImage("Telkom Designer Intern/CTA/Inaproc Progress.jpg", "Working on INAPROC at the office"),
    supportingExperienceImage("Telkom Designer Intern/Audit and Adjusment for Component & Documentation.webp", "Component audit and documentation"),
    supportingExperienceImage("Telkom Designer Intern/Variable Audit & Adjusment.png", "Variable and token audit"),
    supportingExperienceImage("Telkom Designer Intern/Layout Example of E-Katalog Practice.webp", "E-Katalog layout"),
    supportingExperienceImage("Telkom Designer Intern/Design Revamp.png", "Landing page revamp"),
  ],
  "bank-fraud-card": [
    image("AI ML Engineer/Bank Fraud/3D Diagram.jpg", "3D cluster diagram"),
    image("AI ML Engineer/Bank Fraud/Clustering Result.jpg", "Clustering result"),
    image("AI ML Engineer/Bank Fraud/Model Performance.png", "Model performance"),
  ],
  "beauty-glossary-card": [
    image("AI ML Engineer/Beauty Glossary/Gradio Output.png", "Gradio chatbot output"),
    image("AI ML Engineer/Beauty Glossary/Models Ready.png", "Ready models"),
    image("AI ML Engineer/Beauty Glossary/Output Example.png", "Output example"),
  ],
  "bikesharing-card": [
    image("AI ML Engineer/Bike Sharing/Apps Overview.png", "Dashboard overview"),
    image("AI ML Engineer/Bike Sharing/Bike Rental Distribution per day.webp", "Daily rental distribution"),
    image("AI ML Engineer/Bike Sharing/Conclusion.png", "Analysis conclusion"),
    image("AI ML Engineer/Bike Sharing/Heatmap.webp", "Rental heatmap"),
    image("AI ML Engineer/Bike Sharing/Rental Average.webp", "Average rental analysis"),
  ],
  "diabetes-risk-card": [
    image("AI ML Engineer/Diabets Risk/Home.webp", "Prediction app home"),
    image("AI ML Engineer/Diabets Risk/Data Distribution.png", "Data distribution"),
    image("AI ML Engineer/Diabets Risk/Diabetes Distribution.png", "Diabetes distribution"),
    image("AI ML Engineer/Diabets Risk/Heatmap.png", "Feature heatmap"),
    image("AI ML Engineer/Diabets Risk/Corelation Multiple.webp", "Feature correlation"),
    image("AI ML Engineer/Diabets Risk/Model Performance.png", "Model performance"),
    image("AI ML Engineer/Diabets Risk/Model Specification.png", "Model specification"),
    image("AI ML Engineer/Diabets Risk/Result App.webp", "Prediction result"),
  ],
  "movie-recommender-card": [
    image("AI ML Engineer/Movie Recomendation/Dataset Description.png", "Dataset description"),
    image("AI ML Engineer/Movie Recomendation/Evaluation.png", "Recommendation evaluation"),
    image("AI ML Engineer/Movie Recomendation/Genre Distrbution.jpg", "Genre distribution"),
    image("AI ML Engineer/Movie Recomendation/Model Specification.png", "Model specification"),
    image("AI ML Engineer/Movie Recomendation/Rating Distribution.webp", "Rating distribution"),
  ],
  "whatsapp-sentiment-card": [
    image("AI ML Engineer/Sentiment Analyst/Data Awal.webp", "Initial dataset"),
    image("AI ML Engineer/Sentiment Analyst/After Cleaning.webp", "Cleaned dataset"),
    image("AI ML Engineer/Sentiment Analyst/Hyperparameter Tuning Logres.webp", "Logistic regression tuning"),
    image("AI ML Engineer/Sentiment Analyst/Hyperparameter Tuning Random Forest.jpg", "Random Forest tuning"),
    image("AI ML Engineer/Sentiment Analyst/Indonesia slang words.webp", "Indonesian slang vocabulary"),
    image("AI ML Engineer/Sentiment Analyst/Model Performance.png", "Model performance"),
  ],
  "skin-classification-card": [
    image("AI ML Engineer/Skin Type Classification/Class Distribution.jpg", "Class distribution"),
    image("AI ML Engineer/Skin Type Classification/CNN Model Architecture.png", "CNN architecture"),
    image("AI ML Engineer/Skin Type Classification/Evaluation.png", "Model evaluation"),
    image("AI ML Engineer/Skin Type Classification/Result.jpg", "Classification result"),
  ],
  "smart-focus-alert-card-2": [
    image("AI ML Engineer/Smart Focus Alert/Deteksi no Person Full.webp", "No-person detection"),
    image("AI ML Engineer/Smart Focus Alert/Renew Jessica Theresia_MLAI Engineer.webp", "AI engineer output"),
    image("AI ML Engineer/Smart Focus Alert/Result Page.webp", "Result page"),
    image("AI ML Engineer/Smart Focus Alert/Sample PDF Report Live.webp", "PDF report preview"),
  ],
  "aisee-mobile-card": [
    image("UI UX/aisee/Mockup.webp", "AiSee mobile mockup"),
    image("UI UX/aisee/Information Architecture.webp", "Information architecture"),
    image("UI UX/aisee/User Flow AiSee.webp", "AiSee user flow"),
  ],
  "aisee-website-card": [
    image("UI UX/aisee web/Mockup.webp", "AiSee web mockup"),
  ],
  "aoshuttle-project-card": [
    supportingImage("UI UX/aoshattle/card shorting.png", "Card sorting"),
    image("UI UX/aoshattle/User Flow AOShuttle.webp", "AOShuttle user flow"),
  ],
  "campaign-deck-master-card": [
    image("UI UX/campaign deck master/Mockup.webp", "Campaign Deck Master mockup"),
    pdf("UI UX/campaign deck master/Affinity Diagram - OCA 35.pdf", "OCA affinity diagram"),
    image("UI UX/campaign deck master/Survery Result.webp", "Survey result"),
  ],
  "civision-project-card": [
    image("UI UX/civision/Mockup.webp", "Civision mockup"),
    image("UI UX/civision/Empathy Map.jpeg", "Empathy map"),
    image("UI UX/civision/Flowchart.jpg", "Candidate flowchart"),
  ],
  "nusca-project-card-1": [
    image("UI UX/nusca/Mockup.webp", "Nusca mockup"),
    image("UI UX/nusca/Home.webp", "Nusca home"),
    image("UI UX/nusca/Camera.webp", "Camera capture"),
    image("UI UX/nusca/Crop.webp", "Label crop"),
    image("UI UX/nusca/Loading Process.png", "Loading process"),
    image("UI UX/nusca/Analysist Result Not Found.webp", "Analysis not found"),
    image("UI UX/nusca/Analysist Result Not Label.png", "Analysis not label"),
    image("UI UX/nusca/Analysist Result Nutri Level.webp", "Nutri-Level result"),
    image("UI UX/nusca/Nusca-Alur BE.webp", "Backend flow"),
    image("UI UX/nusca/Nusca-Flowchart.webp", "Nusca flowchart"),
  ],
  "nusca-project-card-2": [
    image("UI UX/nusca/Mockup.webp", "Nusca mockup"),
    image("UI UX/nusca/Home.webp", "Nusca home"),
    image("UI UX/nusca/Camera.webp", "Camera capture"),
    image("UI UX/nusca/Crop.webp", "Label crop"),
    image("UI UX/nusca/Loading Process.png", "Loading process"),
    image("UI UX/nusca/Analysist Result Not Found.webp", "Analysis not found"),
    image("UI UX/nusca/Analysist Result Not Label.png", "Analysis not label"),
    image("UI UX/nusca/Analysist Result Nutri Level.webp", "Nutri-Level result"),
    image("UI UX/nusca/Nusca-Alur BE.webp", "Backend flow"),
    image("UI UX/nusca/Nusca-Flowchart.webp", "Nusca flowchart"),
  ],
  "smart-focus-alert-card-1": [
    image("UI UX/smart focus alert/Mockup.webp", "Smart Focus Alert mockup"),
    image("UI UX/smart focus alert/Empathy Map.jpg", "Empathy map"),
    image("UI UX/smart focus alert/Flowchart.webp", "Detection flowchart"),
    image("UI UX/smart focus alert/Result Page.webp", "Result page"),
    image("UI UX/smart focus alert/Time Calculate.webp", "Time calculation"),
  ],
  "nusca-developer-project-card": [
    image("UI UX/nusca/Mockup.webp", "Nusca developer mockup"),
    image("UI UX/nusca/Home.webp", "Nusca home"),
    image("UI UX/nusca/Camera.webp", "Camera capture"),
    image("UI UX/nusca/Crop.webp", "Label crop"),
    image("UI UX/nusca/Loading Process.png", "Loading process"),
    image("UI UX/nusca/Analysist Result Not Found.webp", "Analysis not found"),
    image("UI UX/nusca/Analysist Result Not Label.png", "Analysis not label"),
    image("UI UX/nusca/Analysist Result Nutri Level.webp", "Nutri-Level result"),
    image("UI UX/nusca/Nusca-Alur BE.webp", "Backend flow"),
    image("UI UX/nusca/Nusca-Flowchart.webp", "Nusca flowchart"),
  ],
  "smart-focus-alert-developer-card": [
    image("UI UX/smart focus alert/Mockup.webp", "Smart Focus Alert developer mockup"),
    image("AI ML Engineer/Smart Focus Alert/Deteksi no Person Full.webp", "No-person detection"),
    image("AI ML Engineer/Smart Focus Alert/Result Page.webp", "Result page"),
    image("AI ML Engineer/Smart Focus Alert/Sample PDF Report Live.webp", "PDF report preview"),
  ],
  "leadsight-project-card": [
    image("Developer/Leadsight.webp", "LeadSight dashboard"),
  ],
  "movie-review-project-card": [
    image("Developer/Movie Reviews.webp", "Movie Review application"),
  ],
  "notes-application-project-card": [
    image("Developer/NotesApp.png", "Notes Application"),
  ],
};

export function getProjectAssets(project) {
  return PROJECT_ASSETS[project.id] || [];
}

export function getProjectProfileAsset(project) {
  const assets = getProjectAssets(project);
  if (project.category === 'uiux' || /nusca/i.test(project.id || project.title || '')) {
    const mockup = assets.find((item) => item.type === 'image' && /(?:^|\/)Mockup\.[^/]+$/i.test(item.src));
    if (mockup) return mockup;
  }
  const projectImage = assets.find((item) => item.type === 'image');
  if (projectImage) return projectImage;
  return null;
}
