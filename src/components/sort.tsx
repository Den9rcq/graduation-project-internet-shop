import React from 'react';

const Sort = ({onSortProduct}: { onSortProduct: (event: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
        <div className='col'>
            <button
                name='popular'
                onClick={(e) => onSortProduct(e)}
                className="waves-effect red accent-1 btn-small">
                <i className="material-icons left">star</i>По популярности
            </button>
            <button
                name='highToLow'
                onClick={(e) => onSortProduct(e)}
                className="waves-effect red accent-1 btn-small"><i
                className="material-icons left">sort</i>по возростанию
            </button>
            <button
                name='lowToHigh'
                onClick={(e) => onSortProduct(e)}
                className="waves-effect red accent-1 btn-small"><i
                className="material-icons left revers-sort">sort</i> по убыванию
            </button>
        </div>
    );
};

export default Sort;