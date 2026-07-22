import JourneyItem from "./JourneyItem";
export default function Journey() {
  return (
    <section
      id="timeline"
      className="py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <p className="font-semibold text-indigo-400">
          MY JOURNEY
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          From Curiosity to Building AI
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
          Every role has shaped the way I think about artificial
          intelligence. From research and consulting to founding
          HeartHaxor, my focus has steadily moved toward creating
          AI that is technically capable and genuinely useful for people.
        </p>

        <div className="mt-20">

          <JourneyItem
            year="2023"
            title="Started Exploring AI"
            company="Student & Builder"
            description="Built early machine learning projects and developed a strong interest in solving real-world problems with AI."
          />

          <JourneyItem
            year="2024"
            title="Research Intern"
            company="IIT Hyderabad"
            description="Worked on Android malware detection using deep learning, gaining practical experience in applied AI research."
          />

          <JourneyItem
            year="2025"
            title="Founder's Office Associate"
            company="WowDev AI"
            description="Collaborated across product and AI initiatives, contributing to strategy and execution while working in a fast-paced startup environment."
          />

          <JourneyItem
            year="2026"
            title="Founder"
            company="HeartHaxor"
            description="Founded HeartHaxor to build emotionally intelligent AI companions focused on empathy, memory, and meaningful conversations."
          />

          <JourneyItem
            year="Today"
            title="AI Consultant & Researcher"
            company="Building the Future"
            description="Working on AI products, mentoring, consulting, and pursuing research in Human-Centered AI, Emotional AI, and Healthcare AI."
          />

        </div>

      </div>
    </section>
  );
}
