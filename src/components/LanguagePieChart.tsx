import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: any[];
}

const COLORS = [
  "#3B82F6", 
  "#10B981", 
  "#F59E0B", 
  "#EF4444", 
  "#8B5CF6", 
];

function LanguagePieChart({ data }: Props) {
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
        Language Breakdown
      </h2>

      <p className="mb-8 mt-2 text-slate-400">
        Programming languages used across your repositories.
      </p>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="language"
            outerRadius={130}
           
            stroke="#ffffff"
            strokeWidth={1}
         
            labelLine={{
              stroke: "#A855F7",
              strokeWidth: 1.5,
            }}
            label={({ name }) => name}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            
          </Pie>

          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload || payload.length === 0)
                return null;

              return (
                <div
                  className="
                    rounded-xl
                    bg-[#181C2B]
                    px-4
                    py-3
                  "
                  style={{
                    border: "1px solid #A855F7",
                    boxShadow:
                      "0 0 18px rgba(168,85,247,.20), 0 0 8px rgba(168,85,247,.10)",
                  }}
                >
                  <p className="text-lg font-semibold text-purple-300">
                    {payload[0].name}
                  </p>

                  <p className="mt-1 text-base text-slate-300">
                    <span className="font-semibold text-purple-400">
                      Count :
                    </span>{" "}
                    {payload[0].value}
                  </p>
                </div>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguagePieChart;