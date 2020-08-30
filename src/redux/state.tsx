export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type FriendType = {
    img: string
}
export type SidebarType = {
    friends: Array<FriendType>
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostTextTemp: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextTempActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 0},
                {id: 2, message: 'How are you?', likesCount: 2},
                {id: 3, message: 'Go to drink', likesCount: 22},
                {id: 4, message: 'I never sleep', likesCount: 1},
                {id: 5, message: 'I want to eat', likesCount: 1000}
            ],
            newPostTextTemp: ""
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
                {img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
                {img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 6, message: this._state.profilePage.newPostTextTemp, likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostTextTemp = ""
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT-TEMP') {
            this._state.profilePage.newPostTextTemp = action.NewPostTextTemp
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: 6, message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber()
        }
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateNewPostTextTempActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-POST-TEXT-TEMP", NewPostTextTemp: text} as const)
export const updateNewMessageTextActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newMessageText: text} as const)
export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)

export default store