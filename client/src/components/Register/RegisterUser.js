import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Login from '../Login/Login';
import { setShow } from '../../reduxcomps/actions';

import authService from '../../services/auth-service';

// page for registering a user account
// class RegisterUser extends React.Component {
//   constructor(props) {
//     super(props);

//     // create react references to username and password input elements
//     this.registerUsername = React.createRef();
//     this.registerPassword = React.createRef();

//     // declare function to register user on submit
//     this.registerUser = this.registerUser.bind(this);
//   }

//   // takes current values of inputted username and password and submits it to the backend through auth-services
//   registerUser() {
//     const username = this.registerUsername.current.value;
//     const password = this.registerPassword.current.value;
//     authService.register(username, password)
//     console.log(`Username: ${username} \nPassword: ${password}`)
//   }

//   render(){
//     return (
//       <div>
//         <h1>Registration</h1>
//         <form>
//           <label for="register_username">Username: </label><br />
//           <input type="text" ref={this.registerUsername} ></input><br />
//           <label for="register_password">Password: </label><br />
//           <input type="password" ref={this.registerPassword} ></input><br />
//           <input type="button" value="Submit" onClick={this.registerUser}></input>
//         </form>
//       </div>
//     )
//   }
// }

function RegisterUser() {
	const history = useHistory();
	const dispatch = useDispatch();
	// Form useState variables
	const [registerUsername, setRegisterUsername] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	console.log(registerPassword);

	// takes current values of inputted username and password and submits it to the backend through auth-services
	const registerUser = () => {
		const username = registerUsername;
		const password = registerPassword;
		authService.register(username, password);
		history.push('/');
		window.alert(`${username} has been registered.`);
		dispatch(setShow(true));
	};

	return (
		<div>
			<h1>Registration</h1>
			<form>
				<label for="register_username">Username: </label>
				<br />
				<input
					type="text"
					onChange={(e) => {
						setRegisterUsername(e.target.value);
					}}
				></input>
				<br />
				<label for="register_password">Password: </label>
				<br />
				<input
					type="password"
					onChange={(e) => {
						setRegisterPassword(e.target.value);
					}}
				></input>
				<br />
				<input type="button" value="Submit" onClick={registerUser}></input>
			</form>
		</div>
	);
}

export default RegisterUser;
