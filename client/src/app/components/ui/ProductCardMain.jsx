import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";

const ProductCardMain = ({ name, _id, price, img, }) => {
    return (
        <div className="card horizontal card-main">
            <div className="card-image">
                <img alt={name}
                     src={img} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p className="card-content__header">{name}</p>
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

export default ProductCardMain;