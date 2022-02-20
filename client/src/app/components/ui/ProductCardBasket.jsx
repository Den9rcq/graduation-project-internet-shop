import React from 'react';
import { useSelector } from "react-redux";
import { getProductById } from "../../store/productsSlice";

const ProductCardBasket = ({ productId, count }) => {
    const { img, name, _id, price } = useSelector(getProductById(productId))

    const onDelete = (productId) => {
        console.log(productId)
    }

    return (
        <div className="card horizontal card__basket">
            <div className="card-image">
                <img alt={name} src={img} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p className="card-content__header">{name}</p>
                    <p className='card-content__content'>{`ID Товара: ${_id}`}</p>
                </div>
                <div className="card-content">
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