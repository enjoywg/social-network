import React from 'react';
import c from './Post.module.css';
import {stringify} from "querystring";

type PostType = {
    message: string
    likesCount: number
}
function Post (props: PostType) {
    return (
        <div className={c.posts}>
            <div className={c.item}>
                <img src="https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg" />
                {props.message} likes: {props.likesCount}
            </div>
        </div>
    );
}

export default Post;