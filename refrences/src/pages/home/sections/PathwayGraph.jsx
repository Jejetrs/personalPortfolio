import PathwayTrack from './PathwayTrack.jsx';

export default function PathwayGraph() {
  return (
    <div className="relative w-full my-6 sm:my-8 py-4 sm:py-6 overflow-x-auto no-scrollbar overflow-y-visible select-none min-h-[290px] flex items-center" id="pathway-graph">
      <PathwayTrack />
    </div>
  );
}
