import {ActionsType, DialogsPageType, MessageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: 6, message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: text} as const)
export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)