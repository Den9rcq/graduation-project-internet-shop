import React from 'react';
import SearchPanel from "../components/common/SearchPanel";
import ProductCardBasket from "../components/common/ProductCardBasket";
import OrderTotal from "../components/common/OrderTotal";

const BasketPage = () => {
    return (
        <div className='container'>
            <SearchPanel />
            <div className="row">
                <div className="col l9">
                    <ProductCardBasket />
                </div>
                <div className="col l3">
                    <OrderTotal />
                </div>
            </div>
        </div>
    );
};

export default BasketPage;