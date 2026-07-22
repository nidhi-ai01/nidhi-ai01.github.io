interface ActivityCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function ActivityCard({
  emoji,
  title,
  description,
}: ActivityCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40">
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">
        {description}
      </p>
    </div>
  );
}