import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageItemType = {
    message: string
}
function DialogItem (props: DialogItemType) {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

function MessageItem (props: MessageItemType) {
    return (
        <div className={c.message}>{props.message}</div>
    )
}
function Dialogs () {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name="Igor" id={1} />
                <DialogItem name="Valera" id={2} />
                <DialogItem name="Denis" id={3} />
                <DialogItem name="Vika" id={4} />
                <DialogItem name="Olya" id={5} />
            </div>
            <div className={c.messages}>
                <MessageItem message="Hi"/>
                <MessageItem message="How are you?"/>
                <MessageItem message="Go to drink"/>
            </div>
        </div>
    );
}

export default Dialogs;