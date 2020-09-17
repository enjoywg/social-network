import React from "react";
import store, {ReduxStoreType} from "./redux/redux-store";
import App from "./App";


const StoreContext = React.createContext({} as ReduxStoreType)

export type ProviderType = {
    store: ReduxStoreType
    children: React.ReactNode
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContext