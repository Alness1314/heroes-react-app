import { useLocation, useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { useFetch } from "../hooks/useFetch";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { onInputChange, searchText, onResetForm } = useForm({
    searchText: "",
  });

  const { data, isLoading } = useFetch(
    `http://localhost:8080/api/v1/heroes?name=${q}`
  );

  const onFormSubmit = (event) => {
    event.preventDefault(); //evitar la propagacion del formulario

    if (searchText.trim().length <= 0) return;

    navigate(`?q=${searchText}`);

    onResetForm();
  };

  const isArray = Array.isArray(data);
  const hasResults = isArray && data.length > 0;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div>
          <form onSubmit={onFormSubmit} className="flex flex-col p-5">
            <div className="pb-5">
              <label
                htmlFor="searchText"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Searching
              </label>
              <input
                type="text"
                name="searchText"
                className="bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-s focus:outline-none
             focus:ring-indigo-700 focus:border-indigo-700 
             block w-full p-2.5 
             dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
             dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                placeholder="Search hero videogame"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-span-2">
          <h1 className="mb-3 text-2xl">Results</h1>
          <hr className="border border-zinc-700/70" />

          {!isLoading && q == "" && (
            <div
              className="p-4 mb-4 mt-3 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              <span className="font-medium">Search a hero</span>
            </div>
          )}

          {!hasResults && q !== "" && (
            <div
              className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">
                Hero not found with name: <b>[{q}]</b>
              </span>
            </div>
          )}

          <div className="grid gap-6 justify-items-center mt-5">
            {hasResults &&
              data.map((hero) => <HeroCard key={hero.id} {...hero} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
