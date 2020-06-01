import React from 'react';
import c from './MyPosts.module.css';

function MyPosts () {
    return (
        <div className={c.posts}>
            <div className={c.item}>
                <img src="https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg" />
            </div>
            <div className={c.item}>
                Post2
            </div>
        </div>
    );
}

export default MyPosts;