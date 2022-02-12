import React from 'react';
import SearchPanel from "../components/common/SearchPanel";
import CategoryPanel from "../components/common/CategoryPanel";
import SortProducts from "../components/common/SortProducts";
import ProductCardMain from "../components/common/ProductCardMain";
import Pagination from "../components/common/Pagination";

const Main = () => {
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

export default Main;