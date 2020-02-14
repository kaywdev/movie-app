// Weather App
import React from 'react';
// 3rd Party Comonents
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
// import html components
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Movie from '../components/Movie';
// import year from '../components/year';
// import YourCities from '../components/YourCities';
import Footer from '../components/Footer';


const AppRouter = () => (
	<Router>
		<div className="wrapper">
			<div className="header-oneline">
			<Header />
			{/* <Search /> */}
			</div>
			<Switch>
				<Route path="/" exact><Home /></Route>
				<Route path="/index.html" exact><Home /></Route>
					{/* exact means only this one and does not overwrite */}
				<Route path="/about" ><About /></Route>
				<Route path="/movie" ><Movie /></Route>
				{/* <Route path="/your-movies" exact ><YourCities /></Route> */}
				{/* <Route path="/your-movies/:year" component={year}><year /></Route> */}
					
			</Switch>
			</div>
			<hr/>
			<Footer />
		
	</Router>	
);

export default AppRouter;