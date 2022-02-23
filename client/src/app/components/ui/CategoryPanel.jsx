import React, { useEffect } from 'react';
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, getCategories, getCategoriesLoadingStatus } from "../../store/categoriesSlice";
import LoadingProgressBar from "./LoadingProgressBar";

const CategoryPanel = () => {
    const categories = useSelector(getCategories)
    const loadingStatusCategories = useSelector(getCategoriesLoadingStatus())

    if (loadingStatusCategories === 'loading' || loadingStatusCategories === 'idle') {
        return (
            <LoadingProgressBar />
        )
    }

    return (
        <div className="categories collection z-depth-1">
            <h3 className='center'>Категории</h3>
            <ul className="collection m-0">
                {categories.map(category => <Category
                    key={category._id}
                    {...category} />)}
            </ul>
        </div>
    )
};

export default CategoryPanel;