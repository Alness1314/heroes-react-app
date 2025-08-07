import PropTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";
import { HeroCard } from "./HeroCard";
import { Loader } from "../../ui/components/Loader";

export const HeroList = ({ publisher }) => {
  const { data, isLoading } = useFetch(
    `http://localhost:8080/api/v1/heroes?company=${publisher}`
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-9 overflow-x-auto overflow-y-auto">
      {isLoading ? (
        <Loader />
      ) : (
        data.map((item) => <HeroCard key={item.id} {...item} />)
      )}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
