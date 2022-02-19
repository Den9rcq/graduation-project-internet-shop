import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/authSlice";
import Avatar from "../common/Avatar";

const NavBar = () => {
    const user = useSelector(getCurrentUser)
    const [dropdown, setDropdown] = useState(false)

    return (
        <nav>
            <div className="nav-wrapper px-2">
                <Link to='/' className="brand-logo center">
                    Internet shop
                    <i className='material-icons right'>apple</i>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {
                        user?.admin && <li>
                            <NavLink
                                to="/admin-panel"
                                activeClassName="active"
                            >
                                <i className="large material-icons">admin_panel_settings</i>
                            </NavLink>
                        </li>
                    }
                    {
                        user ?
                            <>
                                <li>
                                    <NavLink
                                        to={`/basket/${user._id}`}
                                        activeClassName="active">
                                        <i className="large material-icons">shopping_cart</i>
                                    </NavLink>
                                </li>
                                <li className="dropdown-container" onClick={() => setDropdown(prevState => !prevState)}>
                                    <span className="dropdown-trigger" data-target="dropdown1">
                                        <Avatar url={user.image} size="50"/>
                                    </span>
                                    <ul id="dropdown1"
                                        className={`dropdown-content ${dropdown ? 'dropdown-content_active' : null}`}>
                                        <li><Link to="/">Main</Link></li>
                                        <li><Link to="/logout">Log out</Link></li>
                                    </ul>
                                </li>
                            </>
                            : <>
                                <li>
                                    <NavLink
                                        to="/login"
                                        activeClassName="active">Вход</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/registration"
                                        activeClassName="active">Регистрация</NavLink>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;