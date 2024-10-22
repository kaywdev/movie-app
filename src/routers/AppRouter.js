// Weather App
import React from 'react';
// 3rd Party Comonents
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
// import html components
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Favourites from '../components/Favourites';
import SingleMovie from '../components/SingleMovie';
import Footer from '../components/Footer';
import WatchLater from '../components/WatchLater';
import PageNotFound from '../components/PageNotFound';


const AppRouter = () => (
	<Router basename={'/movie-app'}>
	 <div className="wrapper">	
			<div className="header-oneline">
				<Header />
			</div>		
			<Switch>
				<Route path="/" exact><Home /></Route>
				<Route path="/index.html" exact><Home /></Route>
				<Route path="/about" ><About /></Route>
				<Route path="/favourites" ><Favourites /></Route>
				<Route path="/watch-later" ><WatchLater /></Route>
				<Route path="/movie" exact/>
				<Route path="/movie/:movieId" exact component={SingleMovie}><SingleMovie /></Route>
				<Route><PageNotFound/></Route>
				{/* <Route path="" component={PageNotFound} /> */}

			</Switch>
			<hr/>
			<Footer />
		</div>
	</Router>	
);

export default AppRouter;