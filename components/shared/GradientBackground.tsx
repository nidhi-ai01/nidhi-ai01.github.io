export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-[150px]" />

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-pink-500/20 blur-[150px]" />
    </div>
  );
}