import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import {
	searchMovies,
	getUpcomingMovies,
	getPopularMovies,
	getRMovies,
	getKidsMovies
} from '../redux/actions/actions';

// Pages
import Home from '../pages/Home';
import Discover from '../pages/Discover';
import Shows from '../pages/Shows';
import Results from '../pages/Results';

// Components
import Navigation from '../components/Navigation';
import FilmInfo from '../components/FilmInfo';

class Container extends Component {
	render() {
		const {
			searchMovies,
			searchResults,
		} = this.props;
		return (
			
			<div className="container">
				<Navigation searchMovies={searchMovies} />
				<Switch>
					<Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />					
					<Route path={process.env.PUBLIC_URL + '/discover'} render={() => <Discover {...this.props} />} exact />
					<Route path={process.env.PUBLIC_URL + '/shows'} component={Shows} exact />
					<Route path={process.env.PUBLIC_URL + '/search'} render={() => <Results searchResults={searchResults} />} exact />
				</Switch>
				<FilmInfo />
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
	kidsMovies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	searchResults: state.movieData.searchResults,
	upcomingMovies: state.movieData.upcomingMovies,
	popularMovies: state.movieData.popularMovies,
	rMovies: state.movieData.rMovies,
	kidsMovies: state.movieData.kidsMovies
})

export default connect(mapStateToProps, {
	searchMovies,
	getUpcomingMovies,
	getPopularMovies,
	getRMovies,
	getKidsMovies
})((Container));