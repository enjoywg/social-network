import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AuthType, setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/store";
import {usersAPI} from "../../api/api";


type PropsType = {
    setAuthUserData: (auth: AuthType) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        usersAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
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