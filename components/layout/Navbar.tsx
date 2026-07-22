"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h1 className="font-heading text-xl font-bold">
          Nidhi Tiwari
        </h1>

        <div className="hidden md:flex gap-8">

  <a href="#about">About</a>

  <a href="#projects">Projects</a>

  <a href="#research">Research</a>

  <a href="#resume">Resume</a>

  <a href="#ai">AI</a>

  <a href="#contact">Contact</a>

</div>

        <ThemeToggle />

      </nav>
    </header>
  );
}