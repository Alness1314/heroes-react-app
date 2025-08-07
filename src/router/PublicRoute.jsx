import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return !logged ? children : <Navigate to="/nintendo" />;
};

PublicRoute.propTypes = {
  children: PropTypes.any,
};
