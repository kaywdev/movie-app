import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import {useLocation} from 'react-router-dom';





const Header = () => {

	const iconPath = process.env.PUBLIC_URL + '/assets/images/';

	let location = useLocation();
	console.log(location);



	const[isMenuOpen, setIsMenuOpen]=useState(false);
return(
	<header className={isMenuOpen ? 'show' : 'hide'}>
    	{/* <h1><Link to="/">MVDB</Link></h1> */}
		<div className="mobile-header">
			<button className="btn-menu" 
					id="btn-menu" 
					onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
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
    		<h1>
				<Link to="/">
				<div className="logo" >
			
				{ (location.pathname !== "/favourites" && location.pathname !== "/watch-later") && <img src = {`${iconPath}mvdb_logo.svg`} alt="logo"/> }
				{ location.pathname === "/favourites" && <img src = {`${iconPath}mvdb_logo_my-favourite.svg`} alt="logo"/> }
				{ location.pathname === "/watch-later" && <img src = {`${iconPath}mvdb_logo_watch-later.svg`} alt="logo"/> }
				</div>
				</Link>
			</h1>
    	</div>
			<Nav/>
	</header>
	
);
}

export default Header;