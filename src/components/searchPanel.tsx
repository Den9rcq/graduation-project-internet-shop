import React, {FC, useState} from 'react';

const SearchPanel: FC = () => {
    const [value, setValue] = useState<string>('')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return (
        <div className="row">
            <div className="input-field s12">
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