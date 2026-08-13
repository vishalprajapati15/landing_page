const metrics = [
  {
    value: "10k+",
    label: "Digital Tasks",
    description: "Applications & services completed",
  },
  {
    value: "100%",
    label: "Customer Focus",
    description: "Reliable local digital assistance",
  },
  {
    value: "Nehru Vihar",
    label: "Delhi",
    description: "Local cyber cafe & digital service center",
  },
];

export default function HeroMetrics() {
  return (
    <div
      className="mt-2 flex flex-wrap items-stretch"
      aria-label="MAX POINT Cyber Cafe business highlights"
    >
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className={`flex min-w-[130px] flex-1 flex-col justify-center py-2 pr-6 sm:min-w-[150px] sm:pr-8 ${
            index !== 0
              ? "border-l border-[#1E293B] pl-6 sm:pl-8"
              : ""
          }`}
        >
          <span
            className="font-[var(--font-outfit)] text-2xl font-bold leading-none tracking-tight text-[#F8FAFC] sm:text-[28px]"
            aria-hidden="true"
          >
            {metric.value}
          </span>

          <span className="mt-2 text-xs font-semibold text-[#F8FAFC] sm:text-sm">
            {metric.label}
          </span>

          <span className="mt-1 max-w-[150px] text-[10px] leading-4 text-[#64748B] sm:text-xs">
            {metric.description}
          </span>
        </div>
      ))}
    </div>
  );
}