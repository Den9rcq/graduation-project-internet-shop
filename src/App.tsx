import React from 'react';
import Header from "./components/Header";
import MainPage from "./layouts/mainPage";

const App = () => {

    return (
        <div className='App'>
            <Header/>
            <div className='container'>
                <MainPage/>
            </div>
        </div>
    );
};

export default App;