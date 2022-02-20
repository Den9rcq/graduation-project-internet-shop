import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../store/productsSlice";
import { getCurrentUser } from "../../store/authSlice";
import { addedProductToCart } from "../../store/cartSlice";

const ProductCard = () => {
    const { productId } = useParams()
    const history = useHistory()
    const product = useSelector(getProductById(productId))
    const authUser = useSelector(getCurrentUser)
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const { name, img, _id, quantity, price } = product

    if (!product) {
        return "Loading"
    }

    const onBuyProduct = (id) => {
        if (!authUser) {
            history.push('/login')
        } else {

            dispatch(addedProductToCart({ id, count: Number(count) }))
        }

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
                    <button
                        className="waves-effect waves-light red accent-1 btn"
                        onClick={() => onBuyProduct(_id)}>
                        Купить
                    </button>
                    <input type="number" onChange={e => {setCount(e.target.value)}} value={count} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;