import React, { useEffect } from 'react'
import SearchPanel from '../ui/SearchPanel'
import ProductCardBasket from '../ui/ProductCardBasket'
import OrderTotal from '../ui/OrderTotal'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../store/cartSlice'
import { Link } from 'react-router-dom'
import { fetchProducts, getProductLoadingStatus } from '../../store/productsSlice'
import LoadingProgressBar from '../ui/LoadingProgressBar'

const BasketPage = () => {
    const cart = useSelector(getCart)
    const dispatch = useDispatch()
    const loadingStatusProduct = useSelector(getProductLoadingStatus())

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='container'>
            <SearchPanel />
            <div className='row'>
                <div className='col l9'>
                    {
                        loadingStatusProduct === 'loading'
                            ? <LoadingProgressBar />
                            : cart.length
                                ? cart.map(product => <ProductCardBasket key={product._id} {...product} />)
                                : <div className='center'>
                                    <h3>Вы не выбрали товары</h3> <h5><Link to={'/'}>перейти к выбору</Link></h5>
                                </div>
                    }
                </div>
                <div className='col l3'>
                    <OrderTotal />
                </div>
            </div>
        </div>
    )
}

export default BasketPage
