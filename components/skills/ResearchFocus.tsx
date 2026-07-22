import TechBadge from "./TechBadge";

const interests = [
  "❤️ Emotional AI",
  "🧠 Human-Centered AI",
  "🏥 Healthcare AI",
  "🤖 AI Agents",
  "📚 Large Language Models",
  "🔍 Retrieval-Augmented Generation",
  "🧩 Memory-Augmented Systems",
  "⚖ Responsible AI",
];

export default function ResearchFocus() {
  return (
    <div className="mt-20">
      <h3 className="text-3xl font-bold">
        Research Focus
      </h3>

      <div className="mt-8 flex flex-wrap gap-4">
        {interests.map((item) => (
          <TechBadge key={item} label={item} />
        ))}
      </div>
    </div>
  );
}