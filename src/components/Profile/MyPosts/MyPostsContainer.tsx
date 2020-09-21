import React, {Dispatch} from 'react';
import {addPostActionCreator, updateNewPostTextTempActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ActionsType, StateType} from "../../../redux/store";
import {connect} from "react-redux";


let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostTextTemp: state.profilePage.newPostTextTemp
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostTextTemp: (text: string) => {dispatch(updateNewPostTextTempActionCreator(text))}
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)