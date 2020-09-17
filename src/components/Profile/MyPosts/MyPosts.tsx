import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";

export type PropsType = {
    posts: Array<PostType>
    newPostTextTemp: string
    updateNewPostTextTemp: (text: string) => void
    addPost: () => void
}

function MyPosts(props: PropsType) {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    let addPost = () => {
        props.addPost()
        //props.dispatch(addPostActionCreator())
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextTemp(e.currentTarget.value)
        //props.dispatch(updateNewPostTextTempActionCreator(e.currentTarget.value))
    }

    return (
        <div className={c.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea value={props.newPostTextTemp} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;