import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type PropsType = {
    store: ReduxStoreType
}

export function DialogsContainer(props: PropsType) {
    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
                 addMessage={addMessage}
                 onMessageChange={onMessageChange}/>
    );
}