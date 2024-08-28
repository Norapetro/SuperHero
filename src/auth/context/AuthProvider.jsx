import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";
import PropTypes from 'prop-types';

const initialState = {
  logged: false,
};

const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = ( name = '' ) => {
    const action = {
        type: types.login,
        payload: {
            id: 'ABC',
            name: name
        }
    }
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
        ...authState,
        login: login
    }}>
       {children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthProvider;
