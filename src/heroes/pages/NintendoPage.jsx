import { HeroList } from "../components/HeroList";

export const NintendoPage = () => {
  return (
    <div>
      <h1 className="mb-10 text-2xl">Nintendo</h1>
      <HeroList publisher={"Nintendo"} />
    </div>
  );
};
