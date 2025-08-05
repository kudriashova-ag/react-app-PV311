import React from 'react';
import { NavLink } from 'react-router';
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    );
}

export default Header;
