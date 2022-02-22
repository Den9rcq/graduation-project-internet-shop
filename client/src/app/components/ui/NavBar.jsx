import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getIsLoggedIn, isLoggedInAuth } from "../../store/authSlice";
import AdminLink from "./NavLinkGroup/AdminLink";
import UserLink from "./NavLinkGroup/UserLink";
import GuestLinks from "./NavLinkGroup/GuestLinks";

const NavBar = () => {
    const user = useSelector(getCurrentUser())

    return (
        <nav>
            <div className="nav-wrapper px-2">
                <Link to='/' className="brand-logo center">
                    Internet shop
                    <i className='material-icons right'>apple</i>
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {user?.admin && <AdminLink />}
                    {user ? <UserLink user={user} /> : <GuestLinks/>}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;