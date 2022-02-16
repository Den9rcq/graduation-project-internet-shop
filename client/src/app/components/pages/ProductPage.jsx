import React from 'react';
import Breadcrumbs from "../ui/Breadcrumbs";
import ProductCard from "../ui/ProductCard";

const ProductPage = () => {
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