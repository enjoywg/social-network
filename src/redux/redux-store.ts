import {CombinedState, combineReducers, createStore, Store} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {ActionsType, DialogsPageType, ProfilePageType, SidebarType} from "./store";
import {usersReducer} from "./users-reducer";

export type ReduxStoreType = Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})
let store = createStore(reducers);

export default store