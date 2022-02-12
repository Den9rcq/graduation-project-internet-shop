import React from 'react';

const SortProducts = () => {
    return (
        <div className='col'>
            <button
                name='popular'
                className="waves-effect red accent-1 btn-small">
                <i className="material-icons left">star</i>По популярности
            </button>
            <button
                name='highToLow'
                className="waves-effect red accent-1 btn-small"><i
                className="material-icons left">sort</i>по возростанию
            </button>
            <button
                name='lowToHigh'
                className="waves-effect red accent-1 btn-small"><i
                className="material-icons left revers-sort">sort</i> по убыванию
            </button>
        </div>
    );
};

export default SortProducts;