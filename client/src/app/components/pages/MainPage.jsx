import React, { useEffect } from 'react';
import SearchPanel from "../common/SearchPanel";
import CategoryPanel from "../common/CategoryPanel";
import SortProducts from "../common/SortProducts";
import ProductCardMain from "../common/ProductCardMain";
import Pagination from "../common/Pagination";

const MainPage = () => {
    return (
        <div className="container">
            <SearchPanel />
            <div className="row">
                <div className="col l4">
                    <CategoryPanel />
                </div>
                <div className="col offset-l1 l7">
                    <div className="row">
                        <SortProducts />
                    </div>
                    <div className="row">
                        <ProductCardMain />
                        <ProductCardMain />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;