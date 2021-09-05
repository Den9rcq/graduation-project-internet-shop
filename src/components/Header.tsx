import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper px-1">
                <a href="/" className="brand-logo center"><i className='material-icons large'>shopping_cart</i>Internet shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Вход</a></li>
                    <li><a href="/">Регистрация</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;