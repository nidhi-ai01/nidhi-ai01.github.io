export default function InviteCard() {
  return (
    <div className="mt-24 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 p-10">
      <h3 className="text-4xl font-bold">
        Let's Build AI Together
      </h3>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
        I'm available for AI workshops, guest lectures,
        startup mentoring, technical training, research
        collaborations, and speaking engagements focused
        on human-centered AI and practical AI engineering.
      </p>

      <button className="mt-10 rounded-full bg-indigo-500 px-8 py-4 text-white transition hover:bg-indigo-400">
        Contact Me
      </button>
    </div>
  );
}