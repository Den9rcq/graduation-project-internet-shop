import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAdmin } from '../../store/authSlice'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isAdmin = useSelector(getAdmin())
    return (
        <>
            <Route {...rest}
                render={props => {
                    if (!isAdmin) {
                        return (
                            <Redirect to={{
                                pathname: '/'
                            }}/>
                        )
                    }
                    return Component ? <Component {...props}/> : children
                }}
            />
        </>
    )
}

ProtectedRoute.propTypes = {
    component: PropTypes.elementType,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default ProtectedRoute
