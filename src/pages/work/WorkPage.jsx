import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import TrainingLightbox from '@/components/TrainingLightbox.jsx';
import useDocumentMeta from '@/hooks/useDocumentMeta.js';
import useWorkBehavior from '@/behaviors/useWorkBehavior.js';
import { META } from './meta.js';
import PTTelekomunikasiIndonesia from './sections/PTTelekomunikasiIndonesia.jsx';

export default function WorkPage() {
  useDocumentMeta(META);
  useWorkBehavior();
  return (
    <>
      <Navbar active="work" showStatus={false} />
      <main className="max-w-[1320px] mx-auto px-6 py-12 w-full flex-1 space-y-10 tech-grid-pattern">
        <header className="wk-intro">
          <p className="wk-kicker">
            <span aria-hidden="true" />
            Experience
          </p>
          <h1>
            Different roles, one goal: <em>making things work better.</em>
          </h1>
          <p>
            From product design and development to team coordination, each experience has taught me something new about understanding business and user needs to designing experiences, building solutions, and collaborating with teams.
          </p>
          <ul className="wk-chips">
            <li className="wk-chip">
              <small>2026</small>
              <b>Designer Intern</b>
              <span>Telkom Indonesia · INAPROC</span>
            </li>
            <li className="wk-chip">
              <small>2026</small>
              <b>Facilitator</b>
              <span>Coding Camp · AI learning path</span>
            </li>
            <li className="wk-chip">
              <small>2026</small>
              <b>ML Reviewer</b>
              <span>Dicoding Indonesia</span>
            </li>
            <li className="wk-chip">
              <small>2023 – 2026</small>
              <b>Lab Instructor</b>
              <span>LepKom Gunadarma University</span>
            </li>
          </ul>
        </header>
        <PTTelekomunikasiIndonesia />
      </main>
      <Footer />
      <TrainingLightbox />
    </>
  );
}
