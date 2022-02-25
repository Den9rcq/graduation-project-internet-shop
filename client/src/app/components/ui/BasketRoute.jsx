import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/authSlice";

const BasketRoute = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <>
            <Route {...rest}
                   render={props => {
                       if (!isLoggedIn) {
                           return (
                               <Redirect to={{
                                   pathname: "/login"
                               }} />
                           );
                       }
                       return Component ? <Component {...props} /> : children;
                   }} />
        </>
    );
};

export default BasketRoute;