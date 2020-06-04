import React from 'react';
import c from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://html5css.ru/css/img_forest.jpg"/>
            </div>
            <div className={c.descriptionBlock}>
                ava +desc
            </div>
        </div>
    );
}

export default ProfileInfo;