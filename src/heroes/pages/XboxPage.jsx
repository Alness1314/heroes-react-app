import { HeroList } from "../components/HeroList";

export const XboxPage = () => {
  return (
    <div>
      <h1 className="mb-10 text-2xl">Xbox</h1>
      <HeroList publisher={"Microsoft"} />
    </div>
  );
};
