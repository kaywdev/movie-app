import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import LogoImage from '../images/mvdb_logo.svg';




const Header = () => {



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
				 <img src = {LogoImage} alt="logo"/>
				</div>
				</Link>
			</h1>
    	</div>
			<Nav/>
	</header>
	
);
}

export default Header;