import React from 'react';

const CategoryPanel = () => {
    return (
        <div className="categories collection">
            <h3 className='center'>Категории</h3>
            <ul className="collection">

                <li className={`collection-item active`}>
                    Все товары
                </li>
                <li className={`collection-item`}>
                    Телефон
                </li>
            </ul>
        </div>
    )
};

export default CategoryPanel;