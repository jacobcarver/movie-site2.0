import React, { Component } from 'react';

// Components
import MovieCategories from '../components/MovieCategories';

class Discover extends Component {
	UNSAFE_componentWillMount() {
		const { getUpcomingMovies, getPopularMovies, getRMovies, getKidsMovies, upcomingMovies, popularMovies, rMovies, kidsMovies } = this.props
		if (upcomingMovies.length <= 0) {
			getUpcomingMovies();
		}
		if (popularMovies.length <= 0) {
			getPopularMovies();
		}
		if (rMovies.length <= 0) {
			getRMovies();
		}
		if (kidsMovies.length <= 0) {
			getKidsMovies();
		}
	}
	render() {
		const {
			upcomingMovies,
			popularMovies,
			rMovies,
			kidsMovies,
			chosenMovie,
			chooseMovie,
			handleMovieModal,
			movieIsOpen
		} = this.props
		return (
			<div id="discover">
				<div className="container">
					<h1>Discover</h1>
					<div>
						<MovieCategories handleMovieModal={handleMovieModal} movieIsOpen={movieIsOpen} chosenMovie={chosenMovie} chooseMovie={chooseMovie} upcomingMovies={upcomingMovies} popularMovies={popularMovies} rMovies={rMovies} kidsMovies={kidsMovies} />
					</div>
				</div>
			</div>
		)
	}
}

export default Discover;