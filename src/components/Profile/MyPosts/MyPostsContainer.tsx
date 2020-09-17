import React from 'react';
import {addPostActionCreator, updateNewPostTextTempActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";
import {StoreType} from "../../../redux/store";

type PropsType = {
    store: ReduxStoreType
}

export function MyPostsContainer() {


    return (
        <StoreContext.Consumer>
            {
            (store: ReduxStoreType) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextTempActionCreator(text))
                }
                return <MyPosts posts={state.profilePage.posts}
                         newPostTextTemp={state.profilePage.newPostTextTemp}
                         updateNewPostTextTemp={onPostChange}
                         addPost={addPost}/>
            }}
        </StoreContext.Consumer>
    );
}