import {ActionsType, PostType, ProfilePageType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 0},
        {id: 2, message: 'How are you?', likesCount: 2},
        {id: 3, message: 'Go to drink', likesCount: 22},
        {id: 4, message: 'I never sleep', likesCount: 1},
        {id: 5, message: 'I want to eat', likesCount: 1000}
    ],
    newPostTextTemp: ""
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
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateNewPostTextTempActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-POST-TEXT-TEMP", NewPostTextTemp: text} as const)

