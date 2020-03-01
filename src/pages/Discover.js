import React, { Component } from 'react';

// Components
import MovieCategories from '../components/MovieCategories';

class Discover extends Component {
	componentWillMount() {
		const { getUpcomingMovies, getPopularMovies, getRMovies, getKidsMovies } = this.props
		getUpcomingMovies();
		getPopularMovies();
		getRMovies();
		getKidsMovies();

		// console.log(Object.keys({...this.props}).filter((prop) => typeof {...this.props}[`${prop}`] !== 'function'));
	}
	render() {
		const { upcomingMovies, popularMovies, rMovies, kidsMovies } = this.props
		return (
			<div id="discover">
				<h1>Discover</h1>
				<div>
					<MovieCategories upcomingMovies={upcomingMovies} popularMovies={popularMovies} rMovies={rMovies} kidsMovies={kidsMovies} />
				</div>
			</div>
		)
	}
}

export default Discover;