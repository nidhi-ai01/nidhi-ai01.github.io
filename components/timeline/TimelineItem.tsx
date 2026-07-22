interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

export default function TimelineItem({
  year,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative pl-14">
      {/* Timeline Line */}
      <div className="absolute left-5 top-0 h-full w-px bg-white/10" />

      {/* Timeline Dot */}
      <div className="absolute left-2 top-2 h-6 w-6 rounded-full border-4 border-slate-950 bg-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.8)]" />

      <div className="pb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
          {year}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {title}
        </h3>

        <p className="text-lg text-indigo-300">
          {company}
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}