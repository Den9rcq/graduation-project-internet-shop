import React from 'react';
import {Switch ,Route} from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./layouts/mainPage";
import LoginPage from "./layouts/loginPage";
import RegistrationPage from "./layouts/registrationPage";

const App = () => {

    return (
        <div className='App'>
            <Header/>
            <div className='container'>
                <Switch>
                    <Route path='/' component={MainPage} exact/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/registration' component={RegistrationPage}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;