import React from 'react';
import Header from "./components/Header";
import SearchPanel from "./components/searchPanel";

const App = () => {

    return (
        <div className='App'>
            <Header/>
            <SearchPanel/>
            <div className="row">
                <div className="col s4">Категории</div>
                <div className="col s8">

                </div>
            </div>
        </div>
    );
};

export default App;