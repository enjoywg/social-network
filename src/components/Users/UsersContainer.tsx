import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionsType, StateType} from "../../redux/store";
import {Dispatch} from "react";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        follow: (userID: number) => {dispatch(followAC(userID))},
        unfollow: (userID: number) => {dispatch(unfollowAC(userID))},
        setUsers: (users: Array<UserType>) => {dispatch(setUsersAC(users))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)