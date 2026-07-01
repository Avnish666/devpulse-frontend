
interface DashboardCardProps {
  title: string;
  value: string | number;
}

function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div
    className="
      rounded-3xl
      bg-[#181C2B]
      border
      border-white/5
      p-7
      shadow-lg
      hover:border-purple-500/30
      transition-all
      overflow-hidden
      min-w-0
    "
  >
      <p className="text-slate-400 text-base">
        {title}
      </p>
  
      <h2 className="mt-3 text-5xl font-bold text-white">
        {value}
      </h2>
    </div>
  );
}

export default DashboardCard;