// Weather App
import React from 'react';
// 3rd Party Comonents
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
// import html components
import Header from '../components/Header';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
// import City from '../components/City';
// import YourCities from '../components/YourCities';
import Footer from '../components/Footer';


const AppRouter = () => (
	<Router>
		<div className="wrapper">
			<Header />
			{/* <Nav /> */}
			<Switch>
				<Route path="/" exact><Home /></Route>
				<Route path="/index.html" exact><Home /></Route>
					{/* exact means only this one and does not overwrite */}
				<Route path="/about" ><About /></Route>
				{/* <Route path="/your-cities" exact ><YourCities /></Route> */}
				{/* <Route path="/your-cities/:city" component={City}><City /></Route> */}
					
			</Switch>
			<Footer />
		</div>
	</Router>	
);

export default AppRouter;