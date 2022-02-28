import React from 'react'
import Breadcrumbs from '../ui/Breadcrumbs'
import ProductCard from '../ui/ProductCard'
import { useSelector } from 'react-redux'
import { getProductLoadingStatus } from '../../store/productsSlice'
import { getCategoriesLoadingStatus } from '../../store/categoriesSlice'
import LoadingProgressBar from '../ui/LoadingProgressBar'
import SearchPanel from '../ui/SearchPanel'

const ProductPage = () => {
    const loadingStatusProducts = useSelector(getProductLoadingStatus())
    const loadingStatusCategories = useSelector(getCategoriesLoadingStatus())

    if (loadingStatusProducts === 'loading' || loadingStatusCategories === 'loading') {
        return (
            <div className='container'><LoadingProgressBar /></div>
        )
    }
    return (
        <>
            <div className='container'>
                <SearchPanel />
                <Breadcrumbs />
                <ProductCard />
            </div>
        </>
    )
}

export default ProductPage
