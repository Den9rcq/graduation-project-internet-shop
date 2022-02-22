import React, { useEffect } from 'react';
import Breadcrumbs from "../ui/Breadcrumbs";
import ProductCard from "../ui/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProductLoadingStatus } from "../../store/productsSlice";
import { fetchCategories, getCategoriesLoadingStatus } from "../../store/categoriesSlice";

const ProductPage = () => {
    const loadingStatusProducts = useSelector(getProductLoadingStatus())
    const loadingStatusCategories = useSelector(getCategoriesLoadingStatus())
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
    }, [])

    if (loadingStatusProducts === 'loading' || loadingStatusCategories === 'loading') {
        return 'loading'
    }
    return (
        <>
            <div className="container">
                <Breadcrumbs />
                <ProductCard />
            </div>
        </>
    );
};

export default ProductPage;