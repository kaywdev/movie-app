import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import {useLocation} from 'react-router-dom';





const Header = () => {

	const iconPath = process.env.PUBLIC_URL + '/assets/images/';

	let location = useLocation();
	console.log(location);
	let movieId = location.pathname.toString().slice(-6);
	// console.log(movieId);


	const[isMenuOpen, setIsMenuOpen]=useState(false);
	// const node = useRef();
	// // useOnClickOutside(node, ()=>setIsMenuOpen(false));
	
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
			{/* {console.log(props.movieid)} */}
				{ location.pathname === "/" && <img src = {`${iconPath}mvdb_logo.svg`} alt="logo"/> }
				{/* { (location.pathname !== "/favourites"&&location.pathname !== "/watch-later") && <img src = {`${iconPath}mvdb_logo.svg`} alt="logo"/> } */}
				{ location.pathname === "/about" && <img src = {`${iconPath}mvdb_logo_about.svg`} alt="logo"/> }
				{ location.pathname === "/favourites" && <img src = {`${iconPath}mvdb_logo_my-favourite.svg`} alt="logo"/> }
				{ location.pathname === "/watch-later" && <img src = {`${iconPath}mvdb_logo_watch-later.svg`} alt="logo"/> }
				{ location.pathname === `/movie/${movieId}` && <img src = {`${iconPath}mvdb_logo_single.svg`} alt="logo"/> }
				
				
				</div>
				</Link>
			</h1>
    	</div>
			<Nav/>
	</header>
	
);
}

export default Header;