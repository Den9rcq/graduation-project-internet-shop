import React from 'react';
import Header from "./components/Header";
import MainPage from "./layouts/mainPage";
import {DataType} from "./common/models";

const App = ({initialState, productCategory}: DataType) => {

    return (
        <div className='App'>
            <Header/>
            <div className='container'>
                <MainPage initialState={initialState} productCategory={productCategory}/>
            </div>
        </div>
    );
};

export default App;