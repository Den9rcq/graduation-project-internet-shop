import React from 'react';

const ProductCard = () => {
    return (
        <div className="card card-product">
            <div className="card-image">
                <img alt=''
                     src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-select-2021?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1617130318000'/>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p className="card-content__header">iPhone 12 mini</p>
                    <div className='card-content__content'>
                        <p className="card-content__content_quantity">{`Количество: `}</p>
                        <p className="card-content__content_price">{`ID Товара: `}</p>
                    </div>
                    <p className="card-content__price">{`Цена: 69900₽`}</p>
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