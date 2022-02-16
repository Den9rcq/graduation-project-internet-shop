import React, { useEffect } from 'react';
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, getCategories } from "../../store/categoriesSlice";

const CategoryPanel = () => {
    const categories = useSelector(getCategories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

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