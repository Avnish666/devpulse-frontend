interface ContributionDay {
  date: string;
  count: number;
}

interface Props {
  data: ContributionDay[];
}

function ContributionHeatmap({ data }: Props) {
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
        Contribution Heatmap
      </h2>

      <p className="mb-8 mt-2 text-slate-400">
        Daily contribution history over the past year.
      </p>

      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: "repeat(54, 17.8px)",
        }}
      >
        {data.map((day, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div
              className={`
                w-4
                h-4
                rounded-sm
                cursor-pointer
                transition-all
                duration-200
                hover:scale-125
hover:ring-2
hover:ring-purple-400/80
hover:shadow-[0_0_12px_rgba(168,85,247,0.55)]
                hover:ring-2
                hover:ring-purple-400/70
                hover:shadow-[0_0_12px_rgba(168,85,247,0.55)]

                ${
                  day.count === 0
                  ? "bg-slate-700"
                  : day.count < 2
                  ? "bg-[#4C1D95]"
                  : day.count < 5
                  ? "bg-[#6D28D9]"
                  : day.count < 8
                  ? "bg-[#7C3AED]"
                  : "bg-[#9333EA]"
                }
              `}
            />

            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                -top-18

                opacity-0
                invisible

                group-hover:opacity-100
                group-hover:visible

                transition-all
                duration-200

                rounded-2xl
                border
                border-purple-500/40

                bg-[#181C2B]

                px-4
                py-3

                whitespace-nowrap

                shadow-[0_0_25px_rgba(168,85,247,0.18)]

                z-50
                pointer-events-none
              "
            >
              <p className="text-purple-300 text-xl font-bold">
                {day.count} commit{day.count !== 1 ? "s" : ""}
              </p>

              <p className="mt-1 text-slate-300">
                {new Date(day.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributionHeatmap;