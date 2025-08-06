import { HeroList } from "../components/HeroList";

export const PlayStationPage = () => {
  return (
    <div>
      <h1 className="mb-10 text-2xl">PlayStation</h1>
      <HeroList publisher={"Sony"} />
    </div>
  );
};
