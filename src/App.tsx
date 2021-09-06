import React from 'react';
import Header from "./components/Header";
import SearchPanel from "./components/searchPanel";
import Sort from "./components/sort";
import CardProducts from "./components/cardProducts";

const App = () => {

    return (
        <div className='App'>
            <Header/>
            <SearchPanel/>
            <div className="row">
                <div className="col s4">Категории</div>
                <div className="col s8">
                    <Sort/>
                    <CardProducts/>
                </div>
            </div>
        </div>
    );
};

export default App;