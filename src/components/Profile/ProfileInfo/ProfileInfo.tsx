import React from 'react';
import c from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {
    profile: ProfileType | null
}

function ProfileInfo(props: PropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://html5css.ru/css/img_forest.jpg"/>
            </div>
            <div className={c.descriptionBlock}>
                <div><img src={props.profile.photos.large !== null ? props.profile.photos.large : ""}/></div>
                <div>{props.profile.fullName}</div>
                <div>Обо мне: {props.profile.aboutMe !== null ? props.profile.aboutMe : ""}</div>
                <div>{props.profile.lookingForAJob ? "Ищу работу" : "Есть работа"}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;