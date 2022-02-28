import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsLoggedIn, isLoggedInAuth } from '../../store/authSlice'
import { fetchCart } from '../../store/cartSlice'
import { fetchCategories } from '../../store/categoriesSlice'
import { fetchProducts } from '../../store/productsSlice'

const AppLoader = ({ children }) => {
    const logged = useSelector(getIsLoggedIn())
    const dispatch = useDispatch()

    useEffect(() => {
        if (logged) {
            dispatch(isLoggedInAuth())
            dispatch(fetchCart())
        }
        dispatch(fetchCategories())
        dispatch(fetchProducts())
    }, [logged])

    return (
        children
    )
}

export default AppLoader
