import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import postReducer from './postReducer';
import showReducer from './showReducer';

export default combineReducers({
	posts: postReducer,
	logged: loginReducer,
	show: showReducer,
});
