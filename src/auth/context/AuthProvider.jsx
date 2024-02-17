import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from 'prop-types';
import { authReducer } from "./authReducer";
import { types } from "../types/types";

export const AuthProvider = ({ children }) => {

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        return {
            logged: !!user,
            user: user,
        }
    }

    const [authState, dispatch] = useReducer(authReducer, { logged: false }, init)


    const login = (name = '') => {
        const user = { id: '1234', name: name }

        const action = { type: types.login, payload: user }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user')

        const action = { type: types.logout }

        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}