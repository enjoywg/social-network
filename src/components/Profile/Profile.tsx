import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

export type ProfilePageType = {
    posts: Array<PostType>
    addPost: () => void
    newPostTextTemp: string
    updateNewPostTextTemp: (newPostTextTemp: string) => void
}

function Profile(props: ProfilePageType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostTextTemp={props.newPostTextTemp} updateNewPostTextTemp={props.updateNewPostTextTemp}/>
        </div>
    );
}

export default Profile;