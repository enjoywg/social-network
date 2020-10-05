import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthType, setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/store";


type PropsType = {
    setAuthUserData: (auth: AuthType) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {

                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

let mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);