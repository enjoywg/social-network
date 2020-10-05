import {ActionsType} from "./store";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostTextTemp: string
    profile: ProfileType | null
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 0},
        {id: 2, message: 'How are you?', likesCount: 2},
        {id: 3, message: 'Go to drink', likesCount: 22},
        {id: 4, message: 'I never sleep', likesCount: 1},
        {id: 5, message: 'I want to eat', likesCount: 1000}
    ],
    newPostTextTemp: "",
    profile: null
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: 6, message: state.newPostTextTemp, likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostTextTemp: ""
            }
        }
        case 'UPDATE-NEW-POST-TEXT-TEMP': {
            return {
                ...state,
                newPostTextTemp: action.NewPostTextTemp
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateNewPostTextTempActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-POST-TEXT-TEMP", NewPostTextTemp: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)