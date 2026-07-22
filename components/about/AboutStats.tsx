export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-8">
      <div>
        <h3 className="text-3xl font-bold text-indigo-300">10+</h3>
        <p className="text-sm text-muted">Projects</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-indigo-300">1</h3>
        <p className="text-sm text-muted">Research Paper</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-indigo-300">1</h3>
        <p className="text-sm text-muted">Startup</p>
      </div>
    </div>
  );
}