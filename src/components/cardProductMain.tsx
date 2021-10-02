import React from 'react';
import { Link } from 'react-router-dom';
import {InitialStateType} from "../common/models";


const CardProductMain = ({product}: { product: InitialStateType }) => {
    const {_id, img, nameOfProduct, price} = product
    return (
        <div key={_id} className="card horizontal">
            <div className="card-image">
                <img alt=''
                     src={img}/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p className="card-content__header">{nameOfProduct}</p>
                    <p className='card-content__content'>{`ID Товара: ${_id}`}</p>
                    <p className='card-content__price'>{`Цена: ${price}₽`}</p>
                </div>
                <div className="card-action">
                    <Link to={`/product/${_id}`}>Открыть карточку</Link>
                </div>
            </div>
        </div>
    );
};

export default CardProductMain;