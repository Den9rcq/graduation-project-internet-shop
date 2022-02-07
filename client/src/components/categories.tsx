import React from 'react';
import {ProductCategoryType} from "../common/models";

type CategoriseType = {
    productCategory: ProductCategoryType[],
    getCurrentCategory: (category: string) => void,
    currentCategory: string
}

const Categories = ({productCategory, getCurrentCategory, currentCategory}: CategoriseType) => {

    return (
        <div className="categories collection">
            <h3 className='center'>Категории</h3>
            <ul className="collection">
                <li className={`collection-item ${!currentCategory ? "active" : ""}`}
                    onClick={() => getCurrentCategory('')}>Все товары
                </li>
                {productCategory.map(category =>
                    <li onClick={() => getCurrentCategory(category.name)}
                        key={category._id}
                        className={`collection-item ${category.name === currentCategory ? "active" : ""}`}>{category.name}
                    </li>)}
            </ul>
        </div>
    );
};

export default Categories;