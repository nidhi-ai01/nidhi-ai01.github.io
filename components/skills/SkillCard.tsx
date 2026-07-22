interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-white/10 px-4 py-2 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}