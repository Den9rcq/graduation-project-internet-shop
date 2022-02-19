import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProductLoadingStatus } from "../../store/productsSlice";
import { fetchCategories, getCategoriesLoadingStatus } from "../../store/categoriesSlice";
import { getIsLoggedIn, isLoggedInAuth } from "../../store/authSlice";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    const productLoading = useSelector(getProductLoadingStatus)
    const categoryLoading = useSelector(getCategoriesLoadingStatus)
    const isLoggedIn = useSelector(getIsLoggedIn)

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(isLoggedInAuth())
        }
        dispatch(fetchProducts())
        dispatch(fetchCategories())
        // eslint-disable-next-line
    }, [])

    if (productLoading === 'loading' || categoryLoading === 'loading') {
        return 'loading'
    }
    return (
        children
    );
};

export default AppLoader;