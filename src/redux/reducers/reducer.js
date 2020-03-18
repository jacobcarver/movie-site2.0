import {
	SEARCH_MOVIES,
	UPCOMING_MOVIES,
	POPULAR_MOVIES,
	R_MOVIES,
	KIDS_MOVIES,
	TV_SHOWS,
	CHOOSE_MOVIE,
	GET_TRAILERS,
	CHOOSE_SHOW,
	OMDB_DATA
} from '../actions/types';

const initialState = {
	searchResults: [],
	upcomingMovies: [],
	popularMovies: [],
	rMovies: [],
	kidsMovies: [],
	tvShows: [],
	chosenMovie: {},
	trailers: [],
	chosenShow: {},
	omdbData: {}
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
		case TV_SHOWS:
			return {
				...state,
				tvShows: action.payload
			}
		case CHOOSE_MOVIE:
			return {
				...state,
				chosenMovie: action.payload
			}
		case GET_TRAILERS:
			return {
				...state,
				trailers: action.payload
			}
		case CHOOSE_SHOW:
			return {
				...state,
				chosenShow: action.payload
			}
		case OMDB_DATA:
			return {
				...state,
				omdbData: action.payload
			}
		default:
			return state;
	}
}