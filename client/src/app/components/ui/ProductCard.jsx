import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store/productsSlice'
import { getCurrentUser } from '../../store/authSlice'
import { addedProductToCart, getCartProduct } from '../../store/cartSlice'

const ProductCard = () => {
    const { productId } = useParams()
    const history = useHistory()
    const product = useSelector(getProductById(productId))
    const authUser = useSelector(getCurrentUser())
    const { count: countOfProductInCart } = useSelector(getCartProduct(productId))
    const dispatch = useDispatch()
    const [count, setCount] = useState(countOfProductInCart || 1)
    const { name, img, _id, quantity, price } = product

    if (!product) {
        return 'Loading'
    }

    const onBuyProduct = (id) => {
        if (!authUser) {
            history.push('/login')
        } else {
            dispatch(addedProductToCart({
                id,
                count: Number(count),
                sumProduct: Number(count) * price
            }))
            history.push('/')
        }
    }
    const onChangeCount = (num) => {
        if (count > 1) {
            setCount(prevState => prevState + num)
        } else if (count === 1) {
            setCount(2)
        }
    }

    return (
        <div className='card card-product'>
            <div className='card-image'>
                <img alt={name}
                    src={img} />
            </div>
            <div className='card-stacked'>
                <div className='card-content'>
                    <p className='card-content__header'>{name}</p>
                    <div className='card-content__content'>
                        <p className='card-content__content_quantity'>{`Количество: ${quantity}`}</p>
                        <p className='card-content__content_price'>{`ID Товара: ${_id}`}</p>
                    </div>
                    <p className='card-content__price'>{`Цена: ${price}₽ шт`}</p>
                </div>
                <div className='card-action center'>
                    <button className='btn-floating btn waves-effect waves-light red mx-1'
                        onClick={() => onChangeCount(-1)}
                        disabled={count === 1}>
                        <i className='material-icons'>remove</i>
                    </button>
                    <button
                        className='waves-effect waves-light red accent-1 btn'
                        onClick={() => onBuyProduct(_id)}
                        disabled={count === countOfProductInCart && count !== 1}>
                        Купить
                    </button>
                    <button className='btn-floating btn waves-effect waves-light red mx-1'
                        onClick={() => onChangeCount(1)}
                        disabled={count === quantity}>
                        <i className='material-icons'>add</i>
                    </button>
                </div>
                <h5><p>Количество <span>{count}</span> шт</p></h5>
            </div>
        </div>
    )
}

export default ProductCard
