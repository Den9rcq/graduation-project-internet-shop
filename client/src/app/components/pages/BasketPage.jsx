import React from 'react';
import SearchPanel from "../ui/SearchPanel";
import ProductCardBasket from "../ui/ProductCardBasket";
import OrderTotal from "../ui/OrderTotal";

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