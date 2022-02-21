import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../store/productsSlice";
import { removeProductToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const ProductCardBasket = ({ productId, count }) => {
    const { img, name, _id, price } = useSelector(getProductById(productId))
    const dispatch = useDispatch()

    const onDelete = (productId) => {
        dispatch(removeProductToCart(productId))
    }

    return (
        <div className="card horizontal card__basket">
            <div className="card-image">
                <img alt={name} src={img} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <Link to={`/product/${_id}`}><p className="card-content__header">{name}</p></Link>
                    <p className='card-content__content'>{`ID Товара: ${_id}`}</p>
                    <p className='card-content__price'>{`Количество: ${count}`}</p>
                </div>
                <div className="card-content">
                    <p className='card-content__price'>{`Цена: ${price * count}₽`}</p>
                </div>
            </div>
            <button
                className='btn-basket waves-effect red accent-1 btn-small'
                onClick={() => onDelete(_id)}>
                <i className="material-icons tiny">delete</i>
            </button>
        </div>
    );
};

export default ProductCardBasket;