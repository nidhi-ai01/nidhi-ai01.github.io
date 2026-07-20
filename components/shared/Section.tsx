import { ReactNode } from "react";
import Container from "./Container";

interface Props {
  children: ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <section className="py-28">
      <Container>{children}</Container>
    </section>
  );
}