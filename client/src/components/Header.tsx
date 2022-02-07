import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper px-2">
                <Link to='/' className="brand-logo center">
                    <i className='material-icons large'>shopping_cart</i>
                    Internet shop
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/login">Вход</Link></li>
                    <li><Link to="/registration">Регистрация</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;