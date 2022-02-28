import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/authSlice'
import PropTypes from 'prop-types'

const BasketRoute = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    return (
        <>
            <Route {...rest}
                render={props => {
                    if (!isLoggedIn) {
                        return (
                            <Redirect to={{
                                pathname: '/login'
                            }} />
                        )
                    }
                    return Component ? <Component {...props} /> : children
                }} />
        </>
    )
}

BasketRoute.propTypes = {
    component: PropTypes.elementType,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default BasketRoute
