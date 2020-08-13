import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/state";

function Navbar(props: SidebarType) {

    let friendsElements = props.friends.map(f => <div className={c.friend}><img src={f.img}/></div>)

    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news" activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
            </div>
            <div className={c.friends}>
                <div>Friends</div>
                <div>
                    {friendsElements}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;