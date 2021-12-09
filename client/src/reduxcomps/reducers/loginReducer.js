import { SET_USER } from '../actions';

function defaultState() {
	return {
		user: null,
	};
}

function loginReducer(state = defaultState(), action) {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.payload.user };
		default:
			return state;
	}
}

export default loginReducer;
