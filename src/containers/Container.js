import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { searchMovies } from '../redux/actions/actions';

// Pages
import Home from '../pages/Home';
import Discover from '../pages/Discover';
import Shows from '../pages/Shows';
import Results from '../pages/Results';

// Components
import Navigation from '../components/Navigation';

class Container extends Component {
	render() {
		const { searchMovies, searchResults } = this.props;
		return (
			
			<div className="container">
				<Navigation searchMovies={searchMovies} />
				<Switch>
					<Route path={process.env.PUBLIC_URL + '/'} component={Home} exact />
					<Route path={process.env.PUBLIC_URL + '/discover'} component={Discover} exact />
					<Route path={process.env.PUBLIC_URL + '/shows'} component={Shows} exact />
					<Route path={process.env.PUBLIC_URL + '/search'} render={() => <Results searchResults={searchResults} />} exact />
				</Switch>
			</div>
		)
	}
}

Container.propTypes = {
	searchMovies: PropTypes.func.isRequired,
	searchResults: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	searchResults: state.movieData.searchResults
})

export default connect(mapStateToProps, {
	searchMovies
})((Container));