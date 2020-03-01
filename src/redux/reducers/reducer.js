import {
	SEARCH_MOVIES,
	UPCOMING_MOVIES,
	POPULAR_MOVIES,
	R_MOVIES,
	KIDS_MOVIES
} from '../actions/types';

const initialState = {
	searchResults: [],
	upcomingMovies: [],
	popularMovies: [],
	rMovies: [],
	kidsMovies: []
};

export default (state = initialState, action) => {
	switch(action.type) {
		case SEARCH_MOVIES:
			return {
				...state,
				searchResults: action.payload
			}
		case UPCOMING_MOVIES:
			return {
				...state,
				upcomingMovies: action.payload
			}
		case POPULAR_MOVIES:
			return {
				...state,
				popularMovies: action.payload
			}
		case R_MOVIES:
			return {
				...state,
				rMovies: action.payload
			}
		case KIDS_MOVIES:
			return {
				...state,
				kidsMovies: action.payload
			}
		default:
			return state;
	}
}