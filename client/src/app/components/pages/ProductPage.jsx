import React from 'react';
import Breadcrumbs from "../ui/Breadcrumbs";
import ProductCard from "../ui/ProductCard";
import { useSelector } from "react-redux";
import { getProductLoadingStatus } from "../../store/productsSlice";
import { getCategoriesLoadingStatus } from "../../store/categoriesSlice";

const ProductPage = () => {
    const loadingStatusProducts = useSelector(getProductLoadingStatus())
    const loadingStatusCategories = useSelector(getCategoriesLoadingStatus())

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