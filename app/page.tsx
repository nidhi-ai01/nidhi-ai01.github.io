import GradientBackground from "@/components/shared/GradientBackground";
import LoadingScreen from "@/components/layout/LoadingScreen";
import PageLayout from "@/components/layout/PageLayout";
import Hero from "@/components/hero/Hero";
import Mission from "@/components/mission/Mission";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <GradientBackground />

      <PageLayout>
        <Hero />

        <Mission />

      </PageLayout>
    </>
  );
}
