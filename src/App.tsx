import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./layouts/mainPage";
import LoginPage from "./layouts/loginPage";
import RegistrationPage from "./layouts/registrationPage";
import ProductPage from "./layouts/productPage";

const App = () => {

    return (
        <div className='App'>
            <Header/>
            <div className='container'>
                <Switch>
                    <Route path='/' component={MainPage} exact/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/registration' component={RegistrationPage}/>
                    <Route path='/product/:productId' component={ProductPage}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </div>
    );
};

export default App;