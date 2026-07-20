import HeroAvatar from "../hero/HeroAvatar";
import HeroBadge from "../hero/HeroBadge";
import HeroButtons from "../hero/HeroButtons";
import HeroSocials from "../hero/HeroSocials";
import HeroStats from "../hero/HeroStats";
import Container from "../shared/Container";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <HeroBadge />

            <h1 className="mt-8 font-heading text-6xl font-bold lg:text-7xl">
              Building AI
              <br />
              with Empathy.
            </h1>

            <h2 className="mt-6 text-2xl font-semibold">
              Nidhi Tiwari
            </h2>

            <p className="mt-6 max-w-xl text-lg text-muted">
              Founder of HeartHaxor, AI Engineer, AI Consultant,
              and researcher focused on Emotional AI,
              Human-Centered AI, and Healthcare AI.
            </p>

            <HeroButtons />

            <HeroSocials />

            <HeroStats />
          </div>

          <div className="flex justify-center">
            <HeroAvatar />
          </div>
        </div>
      </Container>
    </section>
  );
}