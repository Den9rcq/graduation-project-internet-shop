import React, {useState} from 'react';

const SearchPanel = ({onSearch}: {onSearch: (value: string) => void}) => {
    const [value, setValue] = useState('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target
        setValue(value)
        onSearch(value.trim().toLowerCase())
    }

    return (
        <div className="row">
            <div className="input-field s10">
                <input
                    onChange={changeHandler}
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