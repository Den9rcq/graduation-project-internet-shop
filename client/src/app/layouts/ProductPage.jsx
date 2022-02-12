import React from 'react';
import Breadcrumbs from "../components/common/Breadcrumbs";
import SearchPanel from "../components/common/SearchPanel";
import ProductCard from "../components/common/ProductCard";

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