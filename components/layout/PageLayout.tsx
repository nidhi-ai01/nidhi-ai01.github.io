import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function PageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}