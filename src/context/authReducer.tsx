import { AuthState } from "./AuthContext";

import { Ionicons } from '@expo/vector-icons';

type IconName = keyof typeof Ionicons['glyphMap'];

type AuthAction =
    { type: 'signIn' }
    |
    { type: 'Log out' }
    |
    { type: 'setFavoriteIcon', payload: IconName }
    |
    { type: 'setUserName', payload: string }



export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,

            }
        case "Log out":
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case "setFavoriteIcon":
            return {
                ...state,
                favoriteIcon: action.payload

            }

        case "setUserName":
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }

}