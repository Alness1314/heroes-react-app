import PropTypes from "prop-types";
import NoImage from "../../assets/no-immage.png";
import { useImage } from "../hooks/useImage";
import { Link } from "react-router";

export const HeroCard = ({ id, name, nickname, notes, image }) => {
  const { src: imageSrc, hasError } = useImage(
    image?.id ? `http://localhost:8080/api/v1/files/view/${image.id}` : null
  );

  const finalImage = !hasError && imageSrc ? imageSrc : NoImage;

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-zinc-800 dark:hover:bg-zinc-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={finalImage}
        alt={nickname}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {notes}
        </p>

        <Link
          to={`/hero/${id}`}
          className="inline-flex font-medium items-center text-blue-600 hover:underline"
        >
          Mas información...
        </Link>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  nickname: PropTypes.string,
  notes: PropTypes.string,
  image: PropTypes.any,
};
