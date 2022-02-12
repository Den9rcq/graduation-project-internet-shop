import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper px-2">
                <a href='/' className="brand-logo center">
                    <i className='material-icons large'>shopping_cart</i>
                    Internet shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/login">Вход</a></li>
                    <li><a href="/registration">Регистрация</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;