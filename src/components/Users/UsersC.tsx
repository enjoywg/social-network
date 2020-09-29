import React from "react";
import ava from "../../assets/images/ava.jpg";
import c from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersC extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChange = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}
        &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let pagesForView = [pages[this.props.currentPage-2], pages[this.props.currentPage-1], pages[this.props.currentPage]]
        return (
            <div>
                <div>
                    {pagesForView.map(p => <span className={this.props.currentPage === p ? c.selected : ""}
                              onClick={e => this.onPageChange(p)}>
                            {p + " "}
                        </span>
                    )}
                </div>
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
