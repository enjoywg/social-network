import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type PropsType = {
    store: ReduxStoreType
}

export function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            {(store: ReduxStoreType) => {
                let state = store.getState()

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                const onMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return <Dialogs dialogs={state.dialogsPage.dialogs}
                         messages={state.dialogsPage.messages}
                         newMessageText={state.dialogsPage.newMessageText}
                         addMessage={addMessage}
                         onMessageChange={onMessageChange}/>}
            }
        </StoreContext.Consumer>
    );
}