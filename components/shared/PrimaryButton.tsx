interface Props {
  text: string;
}

export default function PrimaryButton({ text }: Props) {
  return (
    <button className="rounded-full bg-indigo-500 px-7 py-3 font-medium text-white transition hover:scale-105 hover:bg-indigo-400">
      {text}
    </button>
  );
}