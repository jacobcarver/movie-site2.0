import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import {
	searchMovies,
	getUpcomingMovies,
	getPopularMovies,
	getRMovies,
	getKidsMovies,
	getTvShows,
	chooseMovie,
	getTrailers,
	chooseShow,
	getOmdbData
} from '../redux/actions/actions';

// Pages
import Home from '../pages/Home';
import Discover from '../pages/Discover';
import Shows from '../pages/Shows';
import Results from '../pages/Results';

// Components
import Navigation from '../components/Navigation';
import MovieModal from '../components/MovieModal';
import TvModal from '../components/TvModal';

class Container extends Component {
	constructor() {
		super();
		this.state = {
			movieIsOpen: false,
			tvIsOpen: false
		}
		this.handleMovieModal = this.handleMovieModal.bind(this);
		this.handleTvModal = this.handleTvModal.bind(this);
	}
	handleMovieModal(bool) {
		this.setState({ movieIsOpen: bool });
	}
	handleTvModal(bool) {
		this.setState({ tvIsOpen: bool });
	}
	render() {
		const {
			searchMovies,
			searchResults,
			getTvShows,
			tvShows,
			chooseMovie,
			chosenMovie,
			getTrailers,
			trailers,
			chooseShow,
			chosenShow,
			getOmdbData,
			omdbData
		} = this.props;
		const { movieIsOpen, tvIsOpen } = this.state
		return (
			<div id="container">
				<Navigation searchMovies={searchMovies} />
				<Switch>
					<Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />					
					<Route path={process.env.PUBLIC_URL + '/discover'} render={() => <Discover {...this.props} movieIsOpen={movieIsOpen} handleMovieModal={this.handleMovieModal} />} exact />
					<Route path={process.env.PUBLIC_URL + '/shows'} render={() => <Shows handleTvModal={this.handleTvModal} chooseShow={chooseShow} getTvShows={getTvShows} tvShows={tvShows} />} exact />
					<Route path={process.env.PUBLIC_URL + '/search'} render={() => <Results handleMovieModal={this.handleMovieModal} movieIsOpen={movieIsOpen} trailers={trailers} getTrailers={getTrailers} chooseMovie={chooseMovie} chosenMovie={chosenMovie} searchResults={searchResults} />} exact />
				</Switch>
				<footer>
					<div className="container">
						<div className="row">
							<div className="logo">LOGO</div>
							<div className="socials">
								<a href="/"><i className="fab fa-facebook-f"></i></a>
								<a href="/"><i className="fab fa-twitter"></i></a>
								<a href="/"><i className="fab fa-youtube"></i></a>
								<a href="/"><i className="fab fa-instagram"></i></a>
							</div>
						</div>
						<div className="divider"></div>
						<div className="row middle">
							<div className="links">
								<div className="col">
									<h5>Links</h5>
									<ul>
										<li>Home</li>
										<li>Movies</li>
										<li>TV</li>
										<li>Search</li>
										<li>Pricing</li>
										<li>About</li>
										<li>FAQs</li>
										<li>Contact</li>
									</ul>
								</div>
								<div className="col">
									<h5>Contact</h5>
									<ul>
										<li>info@example.com</li>
										<li>+800 123 4321</li>
										<li>exampledomain.com</li>
										<li>1234 Address LN. 90506</li>
									</ul>
								</div>
							</div>
							<div className="feed">
								<h5>News Feed</h5>
								<div className="post">
									<img alt="post 1" src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
									<div className="text">
										<h6>Lorem ipsum dolor sit amet, consectetur</h6>
										<span><i className="fas fa-user"></i> By Admin</span>
									</div>
								</div>
								<div className="post">
									<img alt="post 2" src="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
									<div className="text">
										<h6>Lorem ipsum dolor sit amet, consectetur</h6>
										<span><i className="fas fa-user"></i> By Admin</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<p>Copyright &copy; - 2020</p>
							<p><span>Privacy</span> <span>Terms & Conditions</span></p>
						</div>
					</div>
				</footer>
				<MovieModal getOmdbData={getOmdbData} omdbData={omdbData} handleMovieModal={this.handleMovieModal} movieIsOpen={movieIsOpen} getTrailers={getTrailers} trailers={trailers} chosenMovie={chosenMovie} />
				<TvModal handleTvModal={this.handleTvModal} tvIsOpen={tvIsOpen} chosenShow={chosenShow} />
			</div>
		)
	}
}

Container.propTypes = {
	searchMovies: PropTypes.func.isRequired,
	searchResults: PropTypes.array.isRequired,
	getUpcomingMovies: PropTypes.func.isRequired,
	upcomingMovies: PropTypes.array.isRequired,
	getPopularMovies: PropTypes.func.isRequired,
	popularMovies: PropTypes.array.isRequired,
	getRMovies: PropTypes.func.isRequired,
	rMovies: PropTypes.array.isRequired,
	getKidsMovies: PropTypes.func.isRequired,
	kidsMovies: PropTypes.array.isRequired,
	getTvShows: PropTypes.func.isRequired,
	tvShows: PropTypes.array.isRequired,
	chooseMovie: PropTypes.func.isRequired,
	chosenMovie: PropTypes.object.isRequired,
	getTrailers: PropTypes.func.isRequired,
	trailers: PropTypes.array.isRequired,
	chooseShow: PropTypes.func.isRequired,
	chosenShow: PropTypes.object.isRequired,
	getOmdbData: PropTypes.func.isRequired,
	omdbData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	searchResults: state.movieData.searchResults,
	upcomingMovies: state.movieData.upcomingMovies,
	popularMovies: state.movieData.popularMovies,
	rMovies: state.movieData.rMovies,
	kidsMovies: state.movieData.kidsMovies,
	tvShows: state.movieData.tvShows,
	chosenMovie: state.movieData.chosenMovie,
	trailers: state.movieData.trailers,
	chosenShow: state.movieData.chosenShow,
	omdbData: state.movieData.omdbData
})

export default connect(mapStateToProps, {
	searchMovies,
	getUpcomingMovies,
	getPopularMovies,
	getRMovies,
	getKidsMovies,
	getTvShows,
	chooseMovie,
	getTrailers,
	chooseShow,
	getOmdbData
})((Container));