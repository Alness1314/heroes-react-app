import { useParams, useNavigate } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { useImage } from "../hooks/useImage";
import NoImage from "../../assets/no-immage.png";

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
    return (
      <div className="flex items-center justify-center w-auto h-96">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
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
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={onNavigateBack}
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};
