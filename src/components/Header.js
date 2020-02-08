import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Header = () => (
	<header>
    	{/* <h1><Link to="/">MVDB</Link></h1> */}
		<div className="mobile-header">
			<button className="btn-menu" id="btn-menu">
				<div className="icon">
					<div id="nav-hm">
						<div className="hm-menu"></div>
						<div className="hm-menu"></div>
						<div className="hm-menu"></div>
						<div className="hm-menu"></div>
					</div>
				</div>
				<span className="text sr-only">Menu</span>
			</button>
    		<h1><Link to="/"><div className="logo" ></div></Link></h1>
    	</div>
			<Nav />
	</header>
);


export default Header;