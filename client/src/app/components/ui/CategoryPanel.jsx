import React from 'react';
import Category from "./Category";
import { useSelector } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";

const CategoryPanel = () => {
    const categories = useSelector(getCategories)
    return (
        <div className="categories collection">
            <h3 className='center'>Категории</h3>
            <ul className="collection">
                {categories.map(category => <Category
                    key={category._id}
                    {...category} />)}
            </ul>
        </div>
    )
};

export default CategoryPanel;