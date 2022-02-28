import React from 'react'
import SearchPanel from '../ui/SearchPanel'
import CategoryPanel from '../ui/CategoryPanel'
import SortProducts from '../ui/SortProducts'
import ProductCardList from '../ui/ProductCardList'

const MainPage = () => {
    return (
        <div className='container'>
            <SearchPanel />
            <div className='row'>
                <div className='col l4'>
                    <CategoryPanel />
                </div>
                <div className='col offset-l1 l7'>
                    <div className='row'>
                        <SortProducts />
                    </div>
                    <div className='row'>
                        <ProductCardList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
