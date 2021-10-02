import React from 'react';
import Header from "./components/Header";
import MainPage from "./layouts/mainPage";
import LoginPage from "./layouts/loginPage";

const App = () => {

    return (
        <div className='App'>
            <Header/>
            <div className='container'>
                {/*<MainPage/>*/}
                <LoginPage/>
            </div>
        </div>
    );
};

export default App;