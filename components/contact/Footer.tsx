export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} Nidhi Tiwari. All rights reserved.
        </p>

        <p>
          Built with ❤️ using Next.js, TypeScript & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}