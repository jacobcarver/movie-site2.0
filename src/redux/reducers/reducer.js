import { SEARCH_MOVIES } from '../actions/types';

const initialState = {
	searchResults: [],
};

export default (state = initialState, action) => {
	switch(action.type) {
		case SEARCH_MOVIES:
			return {
				...state,
				searchResults: action.payload
			}
		default:
			return state;
	}
}