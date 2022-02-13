import React from 'react';

const SearchPanel = () => {
    return (
        <div className="row mt-2">
            <div className="input-field s10">
                <input
                    id="searchPanel"
                    type="text"
                    className="validate px-1"/>
                <label className="active px-1" htmlFor="searchPanel">
                    <i className="material-icons tiny">search</i> Поиск товара
                </label>
            </div>
        </div>
    );
};

export default SearchPanel;