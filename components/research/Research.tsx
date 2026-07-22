import ResearchCard from "./ResearchCard";
import PublicationCard from "./PublicationCard";
import Vision from "./Vision";

export default function Research() {
  return (
    <section id="research" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <p className="font-semibold text-indigo-400">
          RESEARCH
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Research Interests
        </h2>

        <p className="mt-8 max-w-3xl text-lg text-muted leading-8">
          My work focuses on designing AI systems that
          understand people rather than simply generating
          responses.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <ResearchCard
            title="Human-Centered AI"
            description="Building AI systems that prioritize usability, empathy, and trust."
          />

          <ResearchCard
            title="Emotional AI"
            description="Developing AI capable of understanding and responding to emotions."
          />

          <ResearchCard
            title="Healthcare AI"
            description="Applying AI to improve diagnosis support, patient care, and accessibility."
          />

          <ResearchCard
            title="LLMs & AI Agents"
            description="Exploring large language models, retrieval systems, and autonomous agents."
          />

        </div>

        <PublicationCard />

        <Vision />

      </div>
    </section>
  );
}