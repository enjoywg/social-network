import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ActionsType} from "../../redux/state";

export type ProfilePageType = {
    posts: Array<PostType>
    newPostTextTemp: string
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePageType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostTextTemp={props.newPostTextTemp} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;