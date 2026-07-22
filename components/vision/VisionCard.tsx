interface MissionCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function MissionCard({
  emoji,
  title,
  description,
}: MissionCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-indigo-400/50">
      <div className="text-4xl">{emoji}</div>

      <h3 className="mt-6 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-muted leading-7">
        {description}
      </p>
    </div>
  );
}