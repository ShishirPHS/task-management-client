import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = new createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
