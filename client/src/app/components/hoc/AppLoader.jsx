import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, isLoggedInAuth } from "../../store/authSlice";

const AppLoader = ({ children }) => {
    const logged = useSelector(getIsLoggedIn())
    const dispatch = useDispatch()

    useEffect(() => {
        if (logged) {
            dispatch(isLoggedInAuth())
        }
    }, [])

    return (
        children
    );
};

export default AppLoader;