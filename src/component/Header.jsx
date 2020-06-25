import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h3 className="header__title">Particeep - React Interview</h3>
        <NavLink className="header__title" to="/add">  Ajouter un film ➕</NavLink>
    </header>
)

export default Header;