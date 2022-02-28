import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalProduct, getTotalSumProducts } from '../../store/cartSlice'
import { getEnding } from '../../utils/getEnding'
import history from '../../utils/history'

const OrderTotal = () => {
    const totalProduct = useSelector(getTotalProduct)
    const totalSum = useSelector(getTotalSumProducts)

    return (
        <div className='card order'>
            <div className='card-stacked'>
                <div className='card-content'>
                    <p>Итого: {totalProduct} товар{getEnding(totalProduct)}</p>
                    <p className='card-content__price'>{`Итоговая сумма: ${totalSum}₽`}</p>
                </div>
                <div className='card-action center'>
                    <button
                        className='btn waves-effect waves-light btn-small blue'
                        disabled={!totalProduct}
                        onClick={() => history.push('/order')}>
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderTotal
