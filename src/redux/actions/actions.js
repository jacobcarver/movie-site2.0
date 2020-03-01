import axios from 'axios';

import {
	SEARCH_MOVIES,
	UPCOMING_MOVIES,
	POPULAR_MOVIES,
	R_MOVIES,
	KIDS_MOVIES
} from './types';

// API info
const API_KEY = `api_key=${'b74e9e633dbb1ff6742cdbedaa08687d'}`;
const API_URL = 'https://api.themoviedb.org/3';

// Search Movies
export const searchMovies = (query) => dispatch => {
	// Replace spaces with %20 in url
	const querySearch = String(query).replace(/\s/g, '%20');
	axios.get(`${API_URL}/search/movie?${API_KEY}&language=en-US&query=${querySearch}&page=1&include_adult=false`)
		.then((response) => {
			dispatch({
				type: SEARCH_MOVIES,
				payload: response.data.results
			})
		});
}

// *** Get movies in different categories - start
export const getUpcomingMovies = () => dispatch => {
	axios.get(`${API_URL}/movie/upcoming?${API_KEY}&language=en-US`)
		.then((response) => {
			dispatch({
				type: UPCOMING_MOVIES,
				payload: response.data.results
			})
		});
}

export const getPopularMovies = () => dispatch => {
	axios.get(`${API_URL}/movie/popular?${API_KEY}&sort_by=popularity.desc&language=en-US&page=1`)
		.then((response) => {
			dispatch({
				type: POPULAR_MOVIES,
				payload: response.data.results
			})
		});
}

export const getRMovies = () => dispatch => {
	axios.get(`${API_URL}/discover/movie?certification_country=US&certification=R&${API_KEY}&language=en-US&page=1`)
		.then((response) => {
			dispatch({
				type: R_MOVIES,
				payload: response.data.results
			})
		});
}

export const getKidsMovies = () => dispatch => {
	axios.get(`${API_URL}/discover/movie?certification_country=US&certification=G&${API_KEY}&language=en-US&page=1`)
		.then((response) => {
			dispatch({
				type: KIDS_MOVIES,
				payload: response.data.results
			})
		});
}
// *** Get movies in different categories - end