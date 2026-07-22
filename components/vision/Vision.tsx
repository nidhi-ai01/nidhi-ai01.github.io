import VisionCard from "./VisionCard";
export default function Vision() {
  return (
    <section
      id="mission"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-indigo-400 font-semibold">
          MY PURPOSE
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Why I Build AI
        </h2>
    
        <p className="mt-8 max-w-3xl text-lg text-muted leading-8">
          I believe AI should understand people,
          not just respond to prompts.

          HeartHaxor started after seeing how
          many people turned to AI because they
          felt lonely, unheard, or afraid of
          being judged.

          My goal is to build AI that remembers,
          understands emotions, and genuinely
          supports people through meaningful
          interactions.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <VisionCard
            emoji="❤️"
            title="Human Connection"
            description="Technology should never replace human connection. It should strengthen it."
          />

          <VisionCard
            emoji="🧠"
            title="Human-Centered AI"
            description="Designing AI that understands emotions, context, and memory instead of simply generating responses."
          />

          <VisionCard
            emoji="🏥"
            title="Healthcare AI"
            description="Applying AI to improve healthcare accessibility, decision support, and patient well-being."
          />

          <VisionCard
            emoji="🌍"
            title="Vision"
            description="To build AI that reduces loneliness, empowers people, and creates positive social impact."
          />

        </div>

      </div>
    </section>
  );
}
