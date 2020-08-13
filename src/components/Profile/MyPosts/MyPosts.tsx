import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "./../../../redux/state";



function MyPosts (props: ProfilePageType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className={c.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
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