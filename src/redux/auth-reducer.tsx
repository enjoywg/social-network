import {ActionsType} from "./store";

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.auth,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (auth: AuthType) => ({type: "SET_USER_DATA", auth} as const)