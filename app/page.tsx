import GradientBackground from "@/components/shared/GradientBackground";
import LoadingScreen from "@/components/layout/LoadingScreen";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/hero/Hero";
import Mission from "@/components/mission/Mission";
import Research from "@/components/research/Research";
import Timeline from "@/components/timeline/Timeline";
import Expertise from "@/components/expertise/Expertise";
import Teaching from "@/components/teaching/Teaching";
import Footer from "./Footer";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <GradientBackground />

     <PageLayout>
  <Hero />
  <Mission />
  <Research />
  <Timeline />
  <Expertise /> 
  <Teaching />  
  <Footer />
  <Contact />
</PageLayout>
    </>
  );
}
