import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import postReducer from './postReducer';

export default combineReducers({
	posts: postReducer,
	logged: loginReducer,
});
