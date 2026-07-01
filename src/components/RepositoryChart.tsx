import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface Props {
  data: any[];
}

function RepositoryChart({ data }: Props) {
  return (
    <div
      className="
        mt-10
        rounded-3xl
        bg-[#181C2B]
        border
        border-white/5
        p-8
        shadow-lg
      "
    >
      <h2 className="text-3xl font-bold text-white">
        Most Active Repositories
      </h2>

      <p className="mb-8 mt-2 text-slate-400">
        Ranked by commit count.
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid
            stroke="#374151"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="repository"
            tick={false}
            stroke="#64748B"
          />

          <YAxis stroke="#64748B" />

          <Tooltip
            cursor={{
              fill: "rgba(168,85,247,0.08)"
          }}
            content={({ active, payload }) => {
              if (!active || !payload || payload.length === 0) return null;

              return (
                <div
                  className="
                    rounded-2xl
                    border
                    border-purple-500/40
                    bg-[#181C2B]
                    px-5
                    py-3
                    shadow-[0_0_30px_rgba(168,85,247,0.18)]
                  "
                >
                  <p className="text-purple-300 text-lg font-bold">
                    {payload[0].payload.repository}
                  </p>

                  <p className="mt-2 text-slate-300">
                    <span className="text-purple-400 font-semibold">
                      Commits :
                    </span>{" "}
                    {payload[0].value}
                  </p>
                </div>
              );
            }}
          />

          <Bar
            dataKey="commits"
            radius={[8, 8, 0, 0]}
            fill="#8B5CF6"
            animationDuration={700}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RepositoryChart;