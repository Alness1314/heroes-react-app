import icon from "../../assets/react.svg";
import { NavLink, useNavigate } from "react-router";

export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  } 


  return (
    <nav className="bg-white/70 border-b border-neutral-800/70 dark:bg-zinc-950/50 shadow-2xl h-20 px-8 flex items-center justify-between">
      {/* Logo a la izquierda */}
      <div className="flex items-center space-x-3">
        <img src={icon} className="h-8" alt="logo" />
        <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          Main APP
        </span>
      </div>

      {/* Enlaces a la derecha */}
      <ul className="flex items-center space-x-6">
        <li>
          <NavLink
            to="/nintendo"
            className={({ isActive }) =>
              `py-2 px-3 text-blue-700 dark:text-white ${
                isActive ? "underline" : ""
              }`
            }
          >
            Nintendo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playstation"
            className={({ isActive }) =>
              `py-2 px-3 text-blue-700 dark:text-white ${
                isActive ? "underline" : ""
              }`
            }
          >
            PlayStation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/xbox"
            className={({ isActive }) =>
              `py-2 px-3 text-blue-700 dark:text-white ${
                isActive ? "underline" : ""
              }`
            }
          >
            Xbox
          </NavLink>
        </li>
        <li className="flex items-center">
          <button
            type="button"
            className="py-2 px-3 text-blue-700 dark:text-white bg-transparent border border-blue-700 rounded hover:bg-blue-100 dark:hover:bg-zinc-800"
          onClick={onLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};
