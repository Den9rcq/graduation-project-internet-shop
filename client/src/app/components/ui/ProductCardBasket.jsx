import React from 'react';

const ProductCardBasket = () => {
    return (
        <div className="card horizontal card__basket">
            <div className="card-image">
                <img alt=''
                     src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-select-2021?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1617130318000' />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p className="card-content__header">{'name'}</p>
                    <p className='card-content__content'>{`ID Товара: `}</p>
                </div>
                <div className="card-content">
                    <p className='card-content__price'>{`Количество: `}</p>
                </div>
                <div className="card-content">
                    <p className='card-content__price'>{`Цена: ₽`}</p>
                </div>
            </div>
            <button className='btn-basket waves-effect red accent-1 btn-small'>
                <i className="material-icons tiny">delete</i>
            </button>
        </div>
    );
};

export default ProductCardBasket;