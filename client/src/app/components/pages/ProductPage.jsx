import React from 'react';
import Breadcrumbs from "../common/Breadcrumbs";
import SearchPanel from "../common/SearchPanel";
import ProductCard from "../common/ProductCard";

const ProductPage = () => {
    return (
        <>
            <div className="container">
                <SearchPanel />
                <Breadcrumbs />
                <ProductCard />
            </div>
        </>
    );
};

export default ProductPage;