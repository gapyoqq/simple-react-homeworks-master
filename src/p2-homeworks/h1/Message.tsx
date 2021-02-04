import React from "react";
import {MessageDataPropsType} from "./HW1";
import s from './Message.module.css'


function Message(props: MessageDataPropsType) {
    return (
        <div className={s.main}>
            <div className={s.image}><img className={s.image} src={props.avatar}/></div>
            <div className={s.messageBody}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
