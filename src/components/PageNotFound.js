import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const PageNotFound = () => {
	
	const iconPath = process.env.PUBLIC_URL + '/assets/images/';

	return (
		<main>
			<SearchBar />
			<section className="page-not-found-wrap">
				<h1>404...Page Not Found</h1>
				<div className="page-not-found-logo">
					<img src={`${iconPath}mvdb_logo_404.svg`} alt="MVDB logo" />
				</div>
				<div className="page-not-found-info">

					<p>Oops, sorry we can’t find that page!</p>
				</div>
				<div className="page-not-found-text">
					
					<p>Go to the <Link to="/">Home</Link> page.</p>
				</div>
			</section>
		</main>
	);
};


export default PageNotFound;