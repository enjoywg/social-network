import React from 'react';
import c from './MessageItem.module.css';
import {MessageType} from "../../../redux/store";


function MessageItem(props: MessageType) {
    return (
        <div className={c.message}>{props.message}</div>
        /*<div className={c.message} id={props.id}>{props.message}</div>*/
    )
}
export default MessageItem;