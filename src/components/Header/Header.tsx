import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
}

function Header (props: PropsType) {
    return (
        <header className={c.header}>
            <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"/>
            <div className={c.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;