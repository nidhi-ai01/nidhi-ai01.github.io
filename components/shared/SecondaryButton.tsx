interface Props {
  text: string;
}

export default function SecondaryButton({ text }: Props) {
  return (
    <button className="rounded-full border border-white/20 px-7 py-3 transition hover:bg-white/10">
      {text}
    </button>
  );
}