import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store/productsSlice'
import { activeCategoryChanged, getCategoryById } from '../../store/categoriesSlice'

const Breadcrumbs = () => {
    const { productId } = useParams()
    const product = useSelector(getProductById(productId))
    const { _id, name, label } = useSelector(getCategoryById(product.category))
    const dispatch = useDispatch()

    return (
        <nav>
            <div className='nav-wrapper mt-1 px-1'>
                <ul className='col s12'>
                    <li onClick={() => dispatch(activeCategoryChanged({ name: 'all' }))}>
                        <Link to='/' className='breadcrumb'>Главная</Link>
                    </li>
                    <li onClick={() => dispatch(activeCategoryChanged({ _id, name }))}>
                        <Link
                            to='/'
                            className='breadcrumb'
                        >
                            {label}
                        </Link>
                    </li>
                    <span className='breadcrumb'>{product.name}</span>
                </ul>
            </div>
        </nav>
    )
}

export default Breadcrumbs
