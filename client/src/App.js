import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Switch, Route, Router } from "react-router-dom";

import NavigationBar from './components/Navbar/NavigationBar';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import UserProfile from './components/Profile/UserProfile';
import Posts from './components/Posts/Posts';
import createPost from './components/Posts/createPost';
import Register from './components/Register/RegisterUser';
import Login from './components/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reduxcomps/reducers';
import MakePost from './components/MakePost/MakePost';

const POST_STATE = 'POST_STATE';
const USER_STATE = 'USER_STATE';

// Load state
export const loadState = () => {
	try {
		const serializedState = localStorage.getItem(USER_STATE);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

// Save state
export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(USER_STATE, serializedState);
	} catch (err) {
		console.log('Error saving data:' + err);
	}
};

// Load default state, create redux store, save state to redux store
const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
	saveState(store.getState());
});

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Route component={NavigationBar} />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/prof" component={UserProfile} />
					<Route path="/posts" component={Posts} />
					{/* <Route path="/createPost" component={createPost} /> */}
					<Route path="/createPost" component={MakePost} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</Switch>
				<Footer />
			</div>
		</Provider>
	);
}

export { store };

export default App;
