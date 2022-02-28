import React from 'react'
import { NavLink } from 'react-router-dom'

const GuestLinks = () => {
    return (
        <>
            <li>
                <NavLink
                    to='/login'
                    activeClassName='active'>Вход</NavLink>
            </li>
            <li>
                <NavLink
                    to='/registration'
                    activeClassName='active'>Регистрация</NavLink>
            </li>
        </>
    )
}

export default GuestLinks
