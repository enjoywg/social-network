import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/store";

type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then(response => {
                debugger
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return <Profile profile={this.props.profile}/>
    }

}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

export const ProfileContainer1 = connect(mapStateToProps, {setUserProfile}) (ProfileContainer)