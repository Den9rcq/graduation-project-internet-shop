import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Avatar from '../../common/Avatar'
import { useSelector } from 'react-redux'
import { getTotalProduct } from '../../../store/cartSlice'
import PropTypes from 'prop-types'

const UserLink = ({ user }) => {
    const [dropdown, setDropdown] = useState(false)
    const totalProduct = useSelector(getTotalProduct)
    return (
        <>
            <li>
                <NavLink
                    to={`/basket/${user._id}`}
                    activeClassName='active'
                    className='flex-center-row'>
                    {totalProduct ? <span className='new badge'>{totalProduct}</span> : ''}
                    <i className='large material-icons'>shopping_cart</i>
                </NavLink>
            </li>
            <li className='dropdown-container' onClick={() => setDropdown(prevState => !prevState)}>
                <span className='dropdown-trigger' data-target='dropdown1'>
                    <Avatar url={user.image} size='50'/>
                </span>
                <ul id='dropdown1'
                    className={`dropdown-content ${dropdown ? 'dropdown-content_active' : null}`}>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/logout'>Log out</Link></li>
                </ul>
            </li>
        </>
    )
}

UserLink.propTypes = {
    user: PropTypes.object
}

export default UserLink
