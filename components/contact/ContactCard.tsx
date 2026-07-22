interface ContactCardProps {
  title: string;
  value: string;
}

export default function ContactCard({
  title,
  value,
}: ContactCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm uppercase tracking-wide text-indigo-300">
        {title}
      </p>

      <p className="mt-3 text-lg break-all">
        {value}
      </p>
    </div>
  );
}