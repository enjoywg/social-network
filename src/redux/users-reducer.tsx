import {ActionsType} from "./store";

type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    uniqueUrlName: string | null
    photos: PhotosType
}
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
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
            return {...state, users: [...action.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.toggle}
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const)
export const toggleIsFetching = (toggle: boolean) => ({type: "TOGGLE_IS_FETCHING", toggle} as const)
