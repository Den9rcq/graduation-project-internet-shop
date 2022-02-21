import React from 'react';
import SearchPanel from "../ui/SearchPanel";
import ProductCardBasket from "../ui/ProductCardBasket";
import OrderTotal from "../ui/OrderTotal";
import { useSelector } from "react-redux";
import { getCart, getCartProducts } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const BasketPage = () => {
    const cart = useSelector(getCart)
    return (
        <div className='container'>
            <SearchPanel />
            <div className="row">
                <div className="col l9">
                    {cart.length
                        ? cart.map(product => <ProductCardBasket key={product._id} {...product} />)
                        : <h3 className="center">Вы не выбрали товары <h5><Link to={'/'}>перейти к выбору</Link></h5></h3>}
                </div>
                <div className="col l3">
                    <OrderTotal />
                </div>
            </div>
        </div>
    );
};

export default BasketPage;