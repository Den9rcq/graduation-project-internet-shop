import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductById } from "../../store/productsSlice";

const ProductCard = () => {
    const { productId } = useParams()
    const product = useSelector(getProductById(productId))
    const { name, img, _id, quantity, price } = product

    if (!product) {
        return "Loading"
    }
    return (
        <div className="card card-product">
            <div className="card-image">
                <img alt={name}
                     src={img} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p className="card-content__header">{name}</p>
                    <div className='card-content__content'>
                        <p className="card-content__content_quantity">{`Количество: ${quantity}`}</p>
                        <p className="card-content__content_price">{`ID Товара: ${_id}`}</p>
                    </div>
                    <p className="card-content__price">{`Цена: ${price}₽`}</p>
                </div>
                <div className="card-action">
                    <button className="waves-effect waves-light red accent-1 btn">
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;