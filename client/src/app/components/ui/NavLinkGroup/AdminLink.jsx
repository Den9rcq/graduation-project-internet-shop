import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLink = () => {
    return (
        <li>
            <NavLink
                to='/admin-panel'
                activeClassName='active'
            >
                <i className='large material-icons'>admin_panel_settings</i>
            </NavLink>
        </li>
    )
}

export default AdminLink
