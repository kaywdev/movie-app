import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import {useLocation} from 'react-router-dom';


const Header = () => {

	const iconPath = process.env.PUBLIC_URL + '/assets/images/';
	let location = useLocation();
	let movieId = location.pathname.toString().slice(7);
	const[isMenuOpen, setIsMenuOpen] = useState(false);

	const node = useRef();
	useEffect(() => {
		// add when mounted
		document.addEventListener("mousedown", handleClick);

		// return function to be called when unmounted
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, []);

	const handleClick = e => {
		if (node.current.contains(e.target)) {
			// inside click
			return;
		}
		// outside click 
		setIsMenuOpen(false);
	}

	return(
		<div ref={node}>
			<header className={isMenuOpen ? 'show' : ''}>
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
							{location.pathname === "/" && <img src = {`${iconPath}mvdb_logo.svg`} alt="MVDB logo"/> }
							{location.pathname === "/about" && <img src={`${iconPath}mvdb_logo_about.svg`} alt="MVDB logo"/> }
							{location.pathname === "/favourites" && <img src={`${iconPath}mvdb_logo_my-favourite.svg`} alt="MVDB logo"/> }
							{location.pathname === "/watch-later" && <img src={`${iconPath}mvdb_logo_watch-later.svg`} alt="MVDB logo"/> }
							{location.pathname === `/movie/${movieId}` && <img src={`../${iconPath}mvdb_logo_single.svg`} alt="MVDB logo"/> }
						</div>
						</Link>
					</h1>
				</div>
				<nav onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
					<Nav/>
				</nav>
			</header>
		</div>
	);
}

export default Header;