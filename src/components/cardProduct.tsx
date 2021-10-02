import React from 'react';
import {Link} from "react-router-dom";
import {InitialStateType} from "../common/models";

const CardProduct = ({product}: {product: InitialStateType}) => {
    return (
        <div key={product._id} className="card horizontal">
            <div className="card-image">
                <img alt=''
                     src={product.img}/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p className="card-content__header">{product.nameOfProduct}</p>
                    <p className='card-content__content'>{`ID Товара: ${product._id}`}</p>
                    <p className='card-content__price'>{`Цена: ${product.price}₽`}</p>
                </div>
                <div className="card-action">
                    <Link to={`/product/${product._id}`}>Открыть карточку</Link>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;