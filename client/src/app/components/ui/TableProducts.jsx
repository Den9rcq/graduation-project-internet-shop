import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, getProductLoadingStatus, getProducts } from '../../store/productsSlice'
import TableBody from './TableBody'
import LoadingProgressBar from './LoadingProgressBar'

const TableProducts = () => {
    const product = useSelector(getProducts)
    const loadingStatusProducts = useSelector(getProductLoadingStatus())
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if (loadingStatusProducts === 'loading') {
        return <LoadingProgressBar />
    }
    return (
        <table className='striped centered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Наименование</th>
                    <th>Категории</th>
                    <th>Стоимость</th>
                    <th>Кол-во</th>
                    <th>Действия</th>
                </tr>
            </thead>

            <tbody>
                {product.map(product => <TableBody key={product._id} {...product} />)}
            </tbody>
        </table>
    )
}

export default TableProducts
