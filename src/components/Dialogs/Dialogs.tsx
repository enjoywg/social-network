import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {DialogsPageType} from '../../redux/state';

function Dialogs(props: DialogsPageType) {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <MessageItem id={m.id} message={m.message}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;