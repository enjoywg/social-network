import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts () {
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
                <Post message="1" likesCount={15}/>
                <Post message="2" likesCount={1}/>
                <Post message="3" likesCount={12}/>
            </div>
        </div>
    );
}

export default MyPosts;