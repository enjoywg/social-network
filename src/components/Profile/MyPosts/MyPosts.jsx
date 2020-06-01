import React from 'react';
import c from './Profile.module.css';

function Profile () {
    return (
        <div className={c.content}>
            <div>
                <img src="https://html5css.ru/css/img_forest.jpg" />
            </div>
            <div>
                ava +desc
            </div>
            <div>
                My posts
                <div>
                    Yor post typing
                </div>
            </div>
            <div className={c.posts}>
                <div className={c.item}>
                    Post1
                </div>
                <div className={c.item}>
                    Post2
                </div>
            </div>
        </div>
    );
}

export default Profile;