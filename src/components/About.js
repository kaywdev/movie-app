import React from 'react';
import { getStorage } from '../utilities/storageMaker';
import SearchBar from './SearchBar';

// import wiAllIcons from '../images/wi-all-icons.jpg';

const About = () => (
	
	<main>
	<SearchBar />
	<div className="about about-wrapper">
		<h2>Welcome to MVDB!</h2>
		<section className="about about-project">
			<h3>About the Project</h3>
			<p>MVDB is a Movie Database listing the moviesbased on popularity, rating, and release date. Browse for your favourite film, add it to the Favourite List, and save it for the Watch Later list!</p>
			<p><span>&#9734; </span>This product uses the TMDb APIbut is not endorsed or certified by TMDb.</p>
			<div className="tmdb-logo"></div>
		{/* </div> */}
		</section>

		
		<section className="about about-team">
			<h3>Meet the team</h3>
				<p>MVDB is a React JS project proudly created by <a href="https://www.zahrafetami.com" target="_blank"><span className="red">Zahra</span></a>, <a href="https://www.moonk.ca" target="_blank"><span className="blue">Moon</span></a>, and <a href="https://www.kaywdev.com" target="_blank"><span className="green">Kay</span></a>. We are an ambitious web development team who love coding, designing best user experience, and challenging!</p>
			<div className="about team-icons">
				<div className="zahra"></div>
				<div className="moon"></div>
				<div className="kay"></div>
			</div>

		</section>
	</div>
	</main>
);

export default About;