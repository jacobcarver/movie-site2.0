import axios from 'axios';

import { SEARCH_MOVIES } from './types';

// API info
const API_KEY = `api_key=${'b74e9e633dbb1ff6742cdbedaa08687d'}`;
const API_URL = 'https://api.themoviedb.org/3';

export const searchMovies = (query) => dispatch => {
	// Replace spaces with %20 in url
	const querySearch = String(query).replace(/\s/g, '%20');
	axios.get(`${API_URL}/search/movie?${API_KEY}&language=en-US&query=${querySearch}&page=1&include_adult=false`)
		.then((response) => {
			dispatch({
				type: SEARCH_MOVIES,
				payload: response.data.results
			})
		})
		.catch((err) => {
			console.log("ERROR");
		})
}