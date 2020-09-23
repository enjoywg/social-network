import React from "react";
import ava from "../../assets/images/ava.jpg";
import c from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        return (
            <div>
                {this.props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small !== null ? u.photos.small : ava} className={c.ava} alt=""/></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>

                    </div>
                )}
            </div>
        )
    }
}
