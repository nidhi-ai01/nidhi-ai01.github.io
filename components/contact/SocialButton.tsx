interface SocialButtonProps {
  name: string;
  href: string;
}

export default function SocialButton({
  name,
  href,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition-all hover:border-indigo-400 hover:bg-indigo-500/10"
    >
      {name}
    </a>
  );
}