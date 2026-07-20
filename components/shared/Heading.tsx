interface Props {
  title: string;
  subtitle?: string;
}

export default function Heading({ title, subtitle }: Props) {
  return (
    <div className="mb-14">
      <h2 className="font-heading text-5xl font-bold">{title}</h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-muted">{subtitle}</p>
      )}
    </div>
  );
}