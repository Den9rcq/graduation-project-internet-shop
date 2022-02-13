import React, { useEffect, useState } from 'react';
import categoryService from "../../services/category.service";
import Category from "./Category";

const CategoryPanel = ({categories, currentCategory, handleClick}) => {

    return (
        <div className="categories collection">
            <h3 className='center'>Категории</h3>
            <ul className="collection">
                <li className={`collection-item ${currentCategory === 'all' ? 'active' : null}`}
                    onClick={() => handleClick('all')}>
                    Все категории
                </li>
                {categories.map(category => <Category
                    key={category._id}
                    {...category}
                    currentCategory={currentCategory}
                    handleClick={handleClick} />)}
            </ul>
        </div>
    )
};

export default CategoryPanel;