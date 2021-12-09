import { SET_SHOW } from '../actions';

function showReducer(state = { show: false }, action) {
	switch (action.type) {
		case SET_SHOW:
			return { ...state, show: action.payload.show };
		default:
			return state;
	}
}

export default showReducer;
