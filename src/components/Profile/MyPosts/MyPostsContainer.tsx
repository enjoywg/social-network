import React from 'react';
import {addPostActionCreator, updateNewPostTextTempActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";

type PropsType = {
    store: ReduxStoreType
}

export function MyPostsContainer(props: PropsType) {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextTempActionCreator(text))
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostTextTemp={state.profilePage.newPostTextTemp}
                 updateNewPostTextTemp={onPostChange}
                 addPost={addPost}/>
    );
}