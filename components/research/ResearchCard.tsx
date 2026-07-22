interface ResearchCardProps {
  title: string;
  description: string;
}

export default function ResearchCard({
  title,
  description,
}: ResearchCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/40">
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted">
        {description}
      </p>
    </div>
  );
}