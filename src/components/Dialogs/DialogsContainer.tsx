import React, {Dispatch} from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, StateType} from "../../redux/store";


let mapStateToProps = (state: StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        onMessageChange: (text: string) => {dispatch(updateNewMessageTextActionCreator(text))}
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)