import React from "react";
import {UserType} from "../../redux/users-reducer";
import c from "./Users.module.css";
import axios from 'axios'
import ava from '../../assets/images/ava.jpg'

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: PropsType) {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })

            /*props.setUsers(
                [
                    {
                        id: 1,
                        fullName: 'Igor',
                        status: "Eating",
                        location: {city: "Lisbon", country: "Portugal"},
                        followed: true,
                        ava: "https://www.ejin.ru/wp-content/uploads/2019/01/tzddik5uq3o.jpg"
                    },
                    {
                        id: 2,
                        fullName: 'Oleg',
                        status: "Writing",
                        location: {city: "Warsaw", country: "Poland"},
                        followed: false,
                        ava: "https://www.ejin.ru/wp-content/uploads/2019/01/tzddik5uq3o.jpg"
                    },
                    {
                        id: 3,
                        fullName: 'Sveta',
                        status: "Reading",
                        location: {city: "Lviv", country: "Ukraine"},
                        followed: true,
                        ava: "https://www.ejin.ru/wp-content/uploads/2019/01/tzddik5uq3o.jpg"
                    },
                ]
            )*/
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small !== null ? u.photos.small : ava} className={c.ava} alt=""/></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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