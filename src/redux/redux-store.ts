import {CombinedState, combineReducers, createStore, Store} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ProfilePageType, profileReducer} from "./profile-reducer";
import {ActionsType, DialogsPageType, SidebarType} from "./store";
import {usersReducer, UsersType} from "./users-reducer";
import {authReducer} from "./auth-reducer";

export type ReduxStoreType = Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType;
    usersPage: UsersType}>, ActionsType>

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
// непосредственно создаём store
const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
/*export type ReduxStoreType = ReturnType<typeof rootReducer>*/

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

export default store