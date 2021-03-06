import React from 'react';
import c from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from 'react-router-dom';
import {ReduxStoreType} from './redux/redux-store'
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

type PropsType = {
    store: ReduxStoreType
}
function App(props: PropsType) {
    const state = props.store.getState()
    return (
            <div className={c.app_wrapper}>
                <HeaderContainer/>
                <Navbar friends={state.sidebar.friends}/>
                <div className={c.app_wrapper_content}>
                    <Route path="/profile/:userId?" render={ () => <ProfileContainer />}/>
                    <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
                    <Route path="/users" render={ () => <UsersContainer/>}/>
                    <Route path="/news" render={ () => <News/>}/>
                    <Route path="/music" render={ () => <Music/>}/>
                    <Route path="/settings" render={ () => <Settings/>}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
