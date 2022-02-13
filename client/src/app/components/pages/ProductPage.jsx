import React from 'react';
import Breadcrumbs from "../ui/Breadcrumbs";
import SearchPanel from "../ui/SearchPanel";
import ProductCard from "../ui/ProductCard";

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