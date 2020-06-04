import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className={c.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={c.app_wrapper_content}>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
