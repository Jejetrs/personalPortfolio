import InteractivePathwayContainer from './InteractivePathwayContainer.jsx';

export default function ExperiencePart1() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="experience-heading mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
              Where My Skills Connect
            </h2>
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          </div>
          <p className="text-slate-600 text-sm mt-1">
            Exploring how business, product thinking, design, and technology come together to turn ideas into practical solutions.
          </p>
        </div>
        <div className="flex items-center gap-2"></div>
      </div>
      <InteractivePathwayContainer />
    </div>
  );
}
