
import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import { Ionicons } from '@expo/vector-icons';


type IconName = keyof typeof Ionicons['glyphMap'];

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: IconName;
}


//Estado incial

export const initialState: AuthState = {
    isLoggedIn: false
}


export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    setFavoriteIcon: (iconName: IconName) => void;
    setUserName: (name: string) => void;
};


//Lo usamos para decirle a react como luce y qué expone el context

export const AuthContext = createContext({} as AuthContextProps);

// componente proveedor del estado

export const AuthProvider = ({ children }: { children: any }) => {


    const [authState, dispatch] = useReducer(authReducer, initialState);
    const signIn = () => {
        dispatch({ type: "signIn" });
    }

    const logOut = () => dispatch({ type: 'Log out' });

    const setFavoriteIcon = (iconName: IconName) => dispatch({ type: "setFavoriteIcon", payload: iconName })

    const setUserName = (name: string) => dispatch({ type: "setUserName", payload: name })


    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            setFavoriteIcon,
            setUserName

        }}>
            {children}
        </AuthContext.Provider>
    );
}
