import {addPostActionCreator, profileReducer, updateNewPostTextTempActionCreator} from "./profile-reducer";
import {addMessageActionCreator, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UsersType
} from "./users-reducer";

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
    id: number
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
    usersPage: UsersType
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
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
/*

let store = {
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
                {id: 1, img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
                {id: 2, img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
                {id: 3, img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}

export default store*/
