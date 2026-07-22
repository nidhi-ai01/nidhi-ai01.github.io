import ActivityCard from "./ActivityCard";
import InviteCard from "./InviteCard";

export default function Teaching() {
  return (
    <section
      id="teaching"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="font-semibold text-indigo-400">
          SHARING KNOWLEDGE
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Teaching, Speaking & Mentoring
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
          I enjoy helping students, developers, and organizations
          understand artificial intelligence through practical
          workshops, real-world projects, and collaborative learning.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <ActivityCard
            emoji="🎤"
            title="Speaking"
            description="Delivering talks on AI, startup building, large language models, and human-centered AI."
          />

          <ActivityCard
            emoji="🏫"
            title="Training"
            description="Conducting AI workshops, bootcamps, and technical sessions for students and professionals."
          />

          <ActivityCard
            emoji="🤝"
            title="Mentoring"
            description="Supporting aspiring developers through open-source contributions, career guidance, and AI project reviews."
          />

          <ActivityCard
            emoji="📚"
            title="Writing"
            description="Sharing insights through articles, technical content, and my published book, 'She Deserves the Best'."
          />

        </div>

        <InviteCard />

      </div>
    </section>
  );
}