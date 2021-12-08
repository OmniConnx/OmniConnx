import React, { Component } from 'react';

import AuthService from '../../services/auth-service';

import { useHistory, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginCheck } from '../../reduxcomps/actions';

// export default class Login extends Component {
// 	constructor(props) {
// 		super(props);
// 		// create react references to username and password input elements
// 		this.loginUsername = React.createRef();
// 		this.loginPassword = React.createRef();

// 		// declare function to login user on submit
// 		this.loginUser = this.loginUser.bind(this);
// 	}
// 	// takes current values of inputted username and password and submits it to the backend through auth-services
// 	loginUser() {
// 		AuthService.login(
// 			this.loginUsername.current.value,
// 			this.loginPassword.current.value
// 		);
// 		console.log(
// 			`Username: ${this.loginUsername.current.value} \nPassword: ${this.loginPassword.current.value}`
// 		);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1> Login </h1>
// 				<form onSubmit={this.loginUser}>
// 					<label for="register_username">Username: </label>
// 					<br />
// 					<input type="text" ref={this.loginUsername}></input>
// 					<br />
// 					<label for="login_password">Password: </label>
// 					<br />
// 					<input type="password" ref={this.loginPassword}></input>
// 					<br />
// 					<input type="button" value="Submit" onClick={this.loginUser}></input>
// 				</form>
// 			</div>
// 		);
// 	}
// }

// ------

export default function Login() {
	const dispatch = useDispatch();
	// helper variable for redirecting
	const history = useHistory();
	const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	// takes current values of inputted username and password and submits it to the backend through auth-services
	const loginUser = () => {
		AuthService.login(loginUsername, loginPassword);
		// console.log(`Username: ${loginUsername} \nPassword: ${loginPassword}`);
	};

	const handleRedirect = () => {
		history.push('/');
	};

	return (
		<div>
			<h1> Login </h1>
			<form onSubmit={handleRedirect}>
				<label for="register_username">Username: </label>
				<br />
				<input
					type="text"
					onChange={(e) => {
						setLoginUsername(e.target.value);
						console.log(loginUsername);
					}}
				></input>
				<br />
				<label for="login_password">Password: </label>
				<br />
				<input
					type="password"
					onChange={(e) => {
						setLoginPassword(e.target.value);
						console.log(loginPassword);
					}}
				></input>
				<br />
				<button
					type="submit"
					onClick={() => {
						return loginUser();
					}}
				>
					Submit
				</button>
				{/* <input type="button" value="Submit" onClick={loginUser}></input> */}
			</form>
		</div>
	);
}
