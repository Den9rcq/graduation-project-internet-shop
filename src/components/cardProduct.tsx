import React from 'react';
import {InitialStateType} from "../common/models";

const CardProduct = ({product}: {product: InitialStateType}) => {
    return (
        <div key={product._id} className="card card-product">
            <div className="card-image">
                <img alt=''
                     src={product.img}/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p className="card-content__header">{product.nameOfProduct}</p>
                    <div className='card-content__content'>
                        <p className="card-content__content_quantity">{`Количество: ${product.quantity}`}</p>
                        <p className="card-content__content_price">{`ID Товара: ${product._id}`}</p>
                    </div>
                    <p className="card-content__price">{`Цена: ${product.price}₽`}</p>
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

export default CardProduct;