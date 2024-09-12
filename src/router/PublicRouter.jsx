import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return (!logged) ? children : <Navigate to="/marvel" />;
};

PublicRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRouter;










