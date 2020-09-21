import {ActionsType, DialogsPageType, MessageType} from "./store";

let initialState = {
    dialogs: [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Vika'},
        {id: 5, name: 'Olya'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Go to drink'},
        {id: 4, message: 'I never sleep'},
        {id: 5, message: 'I want to eat'}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: 6, message: state.newMessageText,
            }
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: text} as const)
export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)