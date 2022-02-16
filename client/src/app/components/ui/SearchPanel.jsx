import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { searchStringChanged } from "../../store/productsSlice";

const SearchPanel = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        const { value } = e.target
        if (!value) {
            dispatch(searchStringChanged(''))
        }
        setValue(value)
    }
    const onKeyHandler = (e) => {
        if (e.key === 'Enter') {
            dispatch(searchStringChanged(value.trim().toLowerCase()))
        }
    }

    return (
        <div className="row mt-2">
            <div className="input-field s10">
                <input
                    id="searchPanel"
                    type="text"
                    value={value}
                    onChange={(e) => onChangeHandler(e)}
                    onKeyDown={(e) => onKeyHandler(e)}
                    className="validate px-1" />
                <label className="active px-1" htmlFor="searchPanel">
                    <i className="material-icons tiny">search</i> Поиск товара (для поиска нажмите Enter)
                </label>
            </div>
        </div>
    );
};

export default SearchPanel;