import React, { Component } from 'react';

// Components
import MovieCategories from '../components/MovieCategories';
import CurrentMovie from '../components/CurrentMovie';

class Discover extends Component {
	constructor() {
		super();
		this.state = {
			movieIndex: 0,
			time: Date.now()
		}
		this.updateMovieIndex = this.updateMovieIndex.bind(this);
		this.handleLeft = this.handleLeft.bind(this);
		this.handleRight = this.handleRight.bind(this);
		this.throttle = this.throttle.bind(this);
	}
	UNSAFE_componentWillMount() {
		let { getUpcomingMovies, getPopularMovies, getRMovies, getKidsMovies, upcomingMovies, popularMovies, rMovies, kidsMovies } = this.props
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
	updateMovieIndex() {
		let nextIndex = this.state.movieIndex + 1;
		if (nextIndex >= this.props.upcomingMovies.length) {
			this.setState({ movieIndex: 0 });
		} else {
			this.setState({ movieIndex: nextIndex });
		}
	}
	handleRight() {
		let nextIndex = this.state.movieIndex + 1;
		if (nextIndex >= this.props.upcomingMovies.length) {
			this.setState({ movieIndex: 0 });
		} else {
			this.setState({ movieIndex: nextIndex });
		}
	}
	handleLeft() {
		let prevIndex = this.state.movieIndex - 1;
		if (prevIndex < 0) {
			this.setState({ movieIndex: this.props.upcomingMovies.length - 1 });
		} else {
			this.setState({ movieIndex: prevIndex });
		}
	}
	throttle(fn) {
		const { time } = this.state;
		if ((time + 1500 - Date.now()) < 0) {
			fn();
			this.setState({ time: Date.now() });
		}
	}
	componentDidMount() {
		this.projectTimer = setInterval(() => {
			if (!this.props.movieIsOpen) {
				this.updateMovieIndex();
			}
		}, 10000);
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
		} = this.props;
		let { movieIndex } = this.state;
		return (
			<div id="discover">
				<div className="container">
					{upcomingMovies[movieIndex] !== undefined ? <CurrentMovie throttle={this.throttle} handleRight={this.handleRight} handleLeft={this.handleLeft} handleMovieModal={handleMovieModal} chooseMovie={chooseMovie} upcomingMovies={upcomingMovies} movieIndex={movieIndex} /> : null}
					{upcomingMovies.length > 0 && popularMovies.length > 0 && rMovies.length > 0 && kidsMovies.length > 0 ? 
					<MovieCategories handleMovieModal={handleMovieModal} movieIsOpen={movieIsOpen} chosenMovie={chosenMovie} chooseMovie={chooseMovie} upcomingMovies={upcomingMovies} popularMovies={popularMovies} rMovies={rMovies} kidsMovies={kidsMovies} />
					: null}
				</div>
			</div>
		)
	}
}

export default Discover;