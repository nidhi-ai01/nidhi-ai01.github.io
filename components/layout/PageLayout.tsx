import Navbar from "./Navbar";
import Footer from "../contact/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}