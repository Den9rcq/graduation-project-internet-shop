import React from 'react';
import Pagination from "./pagination";

const CardProducts = () => {
    return (
        <div className="col s10">
            <div className="card horizontal">
                <div className="card-image">
                    <img alt='' src="https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg"/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p className="card-content__header">Наименование товара</p>
                        <p className='card-content__content'>ID Товара</p>
                        <p className='card-content__price'>Стоимость</p>
                    </div>
                    <div className="card-action">
                        <a href="/">Открыть карточку</a>
                    </div>
                </div>
            </div>
            <Pagination/>
        </div>

    );
};

export default CardProducts;