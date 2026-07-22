import SkillCard from "./SkillCard";
import TechBadge from "./TechBadge";
import ResearchFocus from "./ResearchFocus";

const platforms = [
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "LangChain",
  "OpenAI API",
  "Groq",
  "MongoDB",
  "Supabase",
  "PostgreSQL",
  "Docker",
  "Git",
  "GitHub",
  "Vercel",
  "Render",
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <p className="font-semibold text-indigo-400">
          AI EXPERTISE
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Building AI from Research to Production
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
          My work spans AI research, product development, and deploying
          production-ready systems. I enjoy building solutions that combine
          strong engineering with human-centered design.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <SkillCard
            title="AI & Research"
            skills={[
              "Large Language Models",
              "AI Agents",
              "Natural Language Processing",
              "Computer Vision",
              "Retrieval-Augmented Generation",
              "Memory-Augmented AI",
            ]}
          />

          <SkillCard
            title="Engineering"
            skills={[
              "Python",
              "FastAPI",
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "REST APIs",
              "Docker",
            ]}
          />

        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold">
            Tools & Platforms
          </h3>

          <div className="mt-8 flex flex-wrap gap-4">
            {platforms.map((tool) => (
              <TechBadge
                key={tool}
                label={tool}
              />
            ))}
          </div>
        </div>

        <ResearchFocus />

      </div>
    </section>
  );
}