import axios from 'axios';
import { store } from '../../src/App';
import { setUser } from '../../src/reduxcomps/actions';

const API_URL = 'http://localhost:8080/user';

// handles authentication for the user (login, logout, register) and also can get the currently authenticated user's info

class AuthService {
	// authenticates user and saves accessToken in localStorage
	login(username, password) {
		axios
			.post(API_URL + '/signin', {
				username,
				password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					// saves accesstoken to browser's local storage
					localStorage.setItem('user', JSON.stringify(response.data));
					store.dispatch(setUser(JSON.stringify(response.data)));
					console.log(window.localStorage.getItem('user'));
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	// logs currently authenticated user out
	logout() {
		localStorage.removeItem('user');
	}

	register(username, password) {
		axios
			.post(`${API_URL}/signup`, {
				username,
				password,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	// get current user's ID and accesstoken
	getCurrentUser() {
		return JSON.parse(localStorage.getItem('user'));
	}
}

export default new AuthService();
