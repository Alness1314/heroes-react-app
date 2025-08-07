import { useParams, useNavigate } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { useImage } from "../hooks/useImage";
import NoImage from "../../assets/no-immage.png";
import { Loader } from "../../ui/components/Loader";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useFetch(
    `http://localhost:8080/api/v1/heroes/${id}`
  );

  // Ejecutar siempre el hook useImage
  const { src: imageSrc, hasError: hasErrorImg } = useImage(
    data?.image?.id
      ? `http://localhost:8080/api/v1/files/view/${data.image.id}`
      : null
  );

  const finalImage = !hasErrorImg && imageSrc ? imageSrc : NoImage;

  if (isLoading || !data) {
    return <Loader />;
  }

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row dark:border-gray-700 dark:bg-zinc-800">
      <img
        className="object-cover w-full rounded-t-lg h-128 md:w-96 md:rounded-none md:rounded-s-lg"
        src={finalImage}
        alt={data.nickname}
      />
      <div className="flex flex-col justify-between p-4 leading-normal ml-10 w-full">
        <h5 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <div className="grid grid-cols-2 gap-5">
          <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Apodo
              </dt>
              <dd className="text-lg font-semibold">{data.nickname}</dd>
            </div>
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Franquicia
              </dt>
              <dd className="text-lg font-semibold">{data.franchise}</dd>
            </div>
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Compañía Origen
              </dt>
              <dd className="text-lg font-semibold">{data.companyOrigin}</dd>
            </div>
          </dl>

          <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Debut
              </dt>
              <dd className="text-lg font-semibold">{data.debutGame}</dd>
            </div>
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Año
              </dt>
              <dd className="text-lg font-semibold">{data.yearDebut}</dd>
            </div>
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Descripción
              </dt>
              <dd className="text-lg font-semibold">{data.notes}</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-row-reverse justify-baseline pr-5 pt-15">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700"
            onClick={onNavigateBack}
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};
