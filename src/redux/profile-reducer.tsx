import {ActionsType, PostType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 6, message: state.newPostTextTemp, likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostTextTemp = ""
            return state
        case 'UPDATE-NEW-POST-TEXT-TEMP':
            state.newPostTextTemp = action.NewPostTextTemp
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateNewPostTextTempActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-POST-TEXT-TEMP", NewPostTextTemp: text} as const)

