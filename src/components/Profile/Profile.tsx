import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ActionsType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";

type PropsType = {
    store: ReduxStoreType
}

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;