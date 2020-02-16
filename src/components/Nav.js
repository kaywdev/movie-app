import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
	<nav>
        <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favourites">Favourites</NavLink></li>
            <li><NavLink to="/watch-later">Watch Later</NavLink></li>
        </ul>
	</nav>
);

export default Nav;