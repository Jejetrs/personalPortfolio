/* Telkom artifacts */
const BASE = '/assets/experience/Telkom%20Designer%20Intern/';
const local = (file) => BASE + encodeURIComponent(file);
const thumb = (file) => `${BASE}thumbs/${encodeURIComponent(file.replace(/\.[^.]+$/, ''))}.webp`;
const item = (file, tag, title, text) => ({ src: local(file), thumb: thumb(file), tag, title, text });

export const TELKOM_ARTIFACTS = [
  item('Audit and Adjusment for Component & Documentation.webp', 'Audit', 'Component audit in action', 'Reviewing component details and documentation to turn inconsistencies into a clearer, more reliable design system.'),
  item('Audit E-Katalog.png', 'Audit', 'E-Katalog interface audit', 'Mapping hierarchy, spacing and interaction patterns across the procurement experience before refining them.'),
  item('Variable Audit & Adjusment.png', 'Design system', 'Token precision', 'Fine-tuning variables and design tokens so visual decisions stay consistent from screen to screen.'),
  item('Example of Component.webp', 'Design system', 'Reusable component thinking', 'Turning interface patterns into reusable components with clear states, structure and handoff notes.'),
  item('Figma Animation Boolean.png', 'Prototype', 'Interaction prototype', 'Boolean properties and prototype states that show behaviour beyond static screens.'),
  item('Design Revamp.png', 'Landing page', 'Revamp direction', 'A more focused interface direction that makes product information easier to scan.'),
  item('Crazy Eight for Inaproc Landing Page.png', 'Landing page', 'Rapid concept exploration', 'Eight quick directions that uncovered a sharper, more confident landing page concept.'),
  item('Website Exploration Layout for Revamp.webp', 'Research', 'Website layout benchmark', 'Reference sites such as monday.com, Stripe, Webflow and Nintex, each with notes on what INAPROC can borrow.'),
  item('Scrolling web exploration.webp', 'Research', 'Scrolling experience study', 'Award-winning sites studied for motion, section pacing and information hierarchy.'),
  item('Layout Practice.png', 'Practice', 'Layout practice', 'Repeated composition exercises that built layout fluency and responsive decisions.'),
  item('Layout Example of E-Katalog Practice.webp', 'Practice', 'E-Katalog layout study', 'Balancing dense procurement information with readability on a long catalogue page.'),
  item('Screenshot 2026-07-29 071055.png', 'Progress', 'Design progress snapshot', 'A working snapshot of the process as ideas moved toward a resolved product direction.'),
];
