import React from 'react';

const Category = ({ name, _id, currentCategory, handleClick }) => {
    return (
        <li className={`collection-item ${currentCategory === _id ? 'active' : null}`}
            onClick={() => handleClick(_id)}>
            {name}
        </li>
    );
};

export default Category;