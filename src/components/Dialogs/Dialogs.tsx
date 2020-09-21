import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {
    DialogType,
    MessageType,
    } from '../../redux/store';

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    addMessage: () => void
    onMessageChange: (text: string) => void
}
function Dialogs(props: PropsType) {

    let dialogElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>)

    const addMessage = () => {
        props.addMessage()
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessageText} onChange={onMessageChange}/></div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;