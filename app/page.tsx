import GradientBackground from "@/components/shared/GradientBackground";
import LoadingScreen from "@/components/layout/LoadingScreen";
import PageLayout from "@/components/layout/PageLayout";

import About from "@/components/about/About";
import Vision from "@/components/vision/Vision";
import Research from "@/components/research/Research";
import Journey from "@/components/journey/Journey";
import Skills from "@/components/skills/Skills";
import Community from "@/components/community/Community";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <GradientBackground />

     <PageLayout>
  <About />
  <Vision />
  <Research />
  <Journey />
  <Skills />
  <Community />
  <Contact />
</PageLayout>
    </>
  );
}