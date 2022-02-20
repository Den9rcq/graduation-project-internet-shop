import React from 'react';
import SearchPanel from "../ui/SearchPanel";
import ProductCardBasket from "../ui/ProductCardBasket";
import OrderTotal from "../ui/OrderTotal";
import { useSelector } from "react-redux";
import { getCart } from "../../store/cartSlice";

const BasketPage = () => {
    const cart = useSelector(getCart)

    return (
        <div className='container'>
            <SearchPanel />
            <div className="row">
                <div className="col l9">
                    {cart.map(order => <ProductCardBasket key={order.productId} {...order} />)}
                </div>
                <div className="col l3">
                    <OrderTotal />
                </div>
            </div>
        </div>
    );
};

export default BasketPage;