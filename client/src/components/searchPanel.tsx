import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const SearchPanel = ({onSearch}: { onSearch: (value: string) => void }) => {
    const [value, setValue] = useState('')
    const history = useHistory();
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setValue(value)
        if (!value) onSearch(value.trim().toLowerCase())
    }
    const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(value.trim().toLowerCase())
            history.push('/')
            setValue('')
        }
    }

    return (
        <div className="row mt-2">
            <div className="input-field s10">
                <input
                    onChange={changeHandler}
                    onKeyDown={keyHandler}
                    value={value}
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