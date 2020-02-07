import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
	<main>
		<section>
			<div className="page-info">
				<h2>404...Page Not Found</h2>
			</div>
			<div className="about-text">
				<p>Go to the <Link to="/">home</Link> page.</p>
			</div>
		</section>
	</main>
);


export default PageNotFound;