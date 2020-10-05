import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/store";
import { withRouter, RouteComponentProps } from 'react-router-dom';

type PathParamsType = {
    userId: string
}
type PropsType1 = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
}
type PropsType = RouteComponentProps<PathParamsType> & PropsType1

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = "2"
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let WithRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile}) (WithRouterProfileContainer)