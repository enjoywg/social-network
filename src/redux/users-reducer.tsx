import {ActionsType} from "./store";

type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    fullName: string
    status: string
    location: LocationType
    followed: boolean
    ava: string
}
export type UsersType = {
    users: Array<UserType>
}
let initialState: UsersType = {
    users: [
        {id: 1, fullName: 'Igor', status: "Eating", location: {city: "Lisbon", country: "Portugal"}, followed: true,
        ava: "https://www.ejin.ru/wp-content/uploads/2019/01/tzddik5uq3o.jpg"},
        {id: 2, fullName: 'Oleg', status: "Writing", location: {city: "Warsaw", country: "Poland"}, followed: false,
            ava: "https://www.ejin.ru/wp-content/uploads/2019/01/tzddik5uq3o.jpg"},
        {id: 3, fullName: 'Sveta', status: "Reading", location: {city: "Lviv", country: "Ukraine"}, followed: true,
            ava: "https://www.ejin.ru/wp-content/uploads/2019/01/tzddik5uq3o.jpg"},
    ]
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: "SET_USERS", users} as const)