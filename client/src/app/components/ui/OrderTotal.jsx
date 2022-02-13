import React from 'react';

const OrderTotal = () => {
    return (
        <div className="card order">
            <div className="card-stacked">
                <div className="card-content">
                    Итого

                    <p className='card-content__price'>{`Итоговая сумма: ₽`}</p>
                </div>
                <div className="card-action">
                    <a href={`/`}>Оформить заказ</a>
                </div>
            </div>
        </div>
    );
};

export default OrderTotal;