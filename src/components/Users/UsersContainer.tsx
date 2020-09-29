import {connect} from "react-redux";
import {UsersC} from "./UsersC";
import {ActionsType, StateType} from "../../redux/store";
import {Dispatch} from "react";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        follow: (userID: number) => {dispatch(followAC(userID))},
        unfollow: (userID: number) => {dispatch(unfollowAC(userID))},
        setUsers: (users: Array<UserType>) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalUsersCount: number) => {dispatch(setTotalUsersCountAC(totalUsersCount))}

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)