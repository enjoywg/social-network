import React from "react";
import {UserType} from "../../redux/users-reducer";
import c from "./Users.module.css";
import ava from '../../assets/images/ava.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChange: (p: number) => void
    toggleFollowingProgress: (following: boolean, userId: number) => void
}

export function Users(props: PropsType) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let pagesForView = [pages[props.currentPage - 2], pages[props.currentPage - 1], pages[props.currentPage]]
    return (
        <div>
            <div>
                {pagesForView.map(p => <span className={props.currentPage === p ? c.selected : ""}
                                             onClick={e => props.onPageChange(p)}>
                            {p + " "}
                        </span>
                )}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : ava} className={c.ava} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "a1609cc5-c0be-4953-9539-5031d76987bf"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "a1609cc5-c0be-4953-9539-5031d76987bf"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })
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