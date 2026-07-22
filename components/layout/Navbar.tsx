"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h1 className="font-heading text-xl font-bold">
          Nidhi Tiwari
        </h1>

        <div className="hidden gap-8 md:flex">
  {navItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"    >
      {item.label}
    </a>
  ))}
</div>

        <ThemeToggle />

      </nav>
    </header>
  );
}