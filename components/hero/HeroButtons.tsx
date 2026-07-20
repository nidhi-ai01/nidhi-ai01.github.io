import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <PrimaryButton text="Explore HeartHaxor ❤️" />
      <SecondaryButton text="Download Resume" />
    </div>
  );
}