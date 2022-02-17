import React from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper px-2">
                <Link to='/' className="brand-logo center">
                    Internet shop
                    <i className='material-icons right'>apple</i>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink
                            to="/admin-panel"
                            activeClassName="active"
                        >
                            <i className="large material-icons">admin_panel_settings</i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/basket/userId"
                            activeClassName="active">
                            <i className="large material-icons">shopping_cart</i>
                        </NavLink>
                    </li>
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
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;