import React from 'react';
import SearchPanel from "../common/SearchPanel";
import ProductCardBasket from "../common/ProductCardBasket";
import OrderTotal from "../common/OrderTotal";

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