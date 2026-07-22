import ContactCard from "./ContactCard";
import SocialButton from "./SocialButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <p className="font-semibold text-indigo-400">
          CONTACT
        </p>

        <h2 className="mt-4 text-6xl font-bold">
          Let's Build the Future of AI
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted">
          Whether you're a researcher, startup,
          university, or company exploring AI,
          I'd love to collaborate on meaningful
          products and research.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="mailto:nidhitiwari.feb01@gmail.com"
            className="rounded-full bg-indigo-500 px-8 py-4 font-medium text-white transition hover:bg-indigo-400"
          >
            Work With Me
          </a>

          <a
            href="/resume.pdf"
            className="rounded-full border border-white/10 px-8 py-4 transition hover:bg-white/10"
          >
            Download Resume
          </a>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          <ContactCard
            title="Personal Email"
            value="nidhitiwari.feb01@gmail.com"
          />

          <ContactCard
            title="HeartHaxor"
            value="admin@hearthaxor.in"
          />

          <ContactCard
            title="Writing"
            value="inkbynidhi@gmail.com"
          />

          <ContactCard
            title="Photography"
            value="studiosofartist@gmail.com"
          />

        </div>

        <div className="mt-16 flex flex-wrap gap-4">

          <SocialButton
            name="GitHub"
            href="https://github.com/nidhi-ai01"
          />

          <SocialButton
            name="LinkedIn"
            href="https://linkedin.com/in/nidhis13"
          />

          <SocialButton
            name="X"
            href="https://x.com/ai_nidhi18"
          />

          <SocialButton
            name="Medium"
            href="https://medium.com/@inkbynidhi"
          />

          <SocialButton
            name="HeartHaxor"
            href="https://hearthaxor.com"
          />

        </div>

      </div>
    </section>
  );
}