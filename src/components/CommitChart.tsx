import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";
  
  interface Props {
    data: any[];
  }
  
  function CommitChart({ data }: Props) {
    return (
      <div
      className="
        rounded-3xl
        bg-[#181C2B]
        border
        border-white/5
        p-8
        shadow-lg
      "
    >
        <h2 className="text-3xl font-bold text-white">
  Commit Activity
</h2>

<p className="mb-8 mt-2 text-slate-400">
  Daily commit frequency across all repositories.
</p>
  
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={data}>
       <CartesianGrid
    stroke="rgba(255,255,255,0.08)"
    strokeDasharray="4 4"
/>
  
<XAxis
    dataKey="date"
    tick={false}
    stroke="#64748B"
/>
  
<YAxis stroke="#64748B" />
  
            <Tooltip
  contentStyle={{
    backgroundColor: "#181C2B",
    border: "1px solid rgba(168,85,247,0.35)",
    borderRadius: "14px",
    color: "#fff",
    boxShadow: "0 8px 30px rgba(168,85,247,.25)",
  }}
  labelStyle={{
    color: "#E9D5FF",
    fontWeight: 700,
  }}
  itemStyle={{
    color: "#A78BFA",
    fontWeight: 600,
  }}
  cursor={{
    stroke: "#A855F7",
    strokeWidth: 2,
  }}
/>
  
<defs>
  <filter id="purpleGlow">
    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
    <feMerge>
      <feMergeNode in="coloredBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>

<Line
    type="monotone"
    dataKey="commits"
    stroke="#8B5CF6"
    strokeWidth={2.5}
    filter="url(#purpleGlow)"
    dot={false}
    activeDot={{
        r: 6,
        fill: "#A855F7",
        stroke: "#fff",
        strokeWidth: 2,
    }}
/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default CommitChart;