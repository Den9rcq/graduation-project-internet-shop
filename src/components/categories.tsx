import React from 'react';
import {ProductCategoryType} from "../common/models";

const Categories = ({productCategory}: { productCategory: ProductCategoryType[] }) => {

    return (
        <div className="categories collection">
            <h3 className='center'>Категории</h3>
            <ul className="collection">
                {productCategory.map(category => <li
                    key={category._id}
                    className="collection-item">{category.name}</li>)}
            </ul>
        </div>
    );
};

export default Categories;