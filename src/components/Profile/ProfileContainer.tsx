import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/store";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {usersAPI} from "../../api/api";

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
        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
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