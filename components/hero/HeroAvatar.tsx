export default function HeroAvatar() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-pink-500/20 text-5xl font-bold">
        NT
      </div>
    </div>
  );
}