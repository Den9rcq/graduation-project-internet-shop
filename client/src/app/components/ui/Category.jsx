import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { activeCategoryChanged, getCurrentCategory } from "../../store/categoriesSlice";

const Category = ({ label, name, _id }) => {
    const currentCategory = useSelector(getCurrentCategory())
    const dispatch = useDispatch()

    const onActiveCategory = (category) => {
        if (category._id !== currentCategory._id) {
            dispatch(activeCategoryChanged(category))
        }
    }

    return (
        <li className={`collection-item ${currentCategory.name === name ? 'active' : null}`}
            onClick={() => onActiveCategory({ _id, name })}>
            {label}
        </li>
    );
};

export default Category;