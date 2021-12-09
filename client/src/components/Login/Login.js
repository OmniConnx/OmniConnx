import "./Login.css"
import React, { useState } from 'react';
import AuthService from '../../services/auth-service';
import { setShow } from '../../reduxcomps/actions';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCheck } from '../../reduxcomps/actions';
import { useSelector } from 'react-redux';
import { Modal, Button, Nav, Form } from 'react-bootstrap';

// export default function Login() {
// 	const { user } = useSelector((state) => state.logged);
// 	const dispatch = useDispatch();
// 	// helper variable for redirecting
// 	const history = useHistory();
// 	const [loginUsername, setLoginUsername] = useState('');
// 	const [loginPassword, setLoginPassword] = useState('');

// 	// takes current values of inputted username and password and submits it to the backend through auth-services
// 	const loginUser = () => {
// 		AuthService.login(loginUsername, loginPassword);
// 		// console.log(`Username: ${loginUsername} \nPassword: ${loginPassword}`);
// 	};

// 	const handleRedirect = () => {
// 		history.push('/');
// 	};

// 	return (
// 		<div>

// 			<h1> Login </h1>
// 			<form onSubmit={handleRedirect}>
// 				<label for="register_username">Username: </label>
// 				<br />
// 				<input
// 					type="text"
// 					onChange={(e) => {
// 						setLoginUsername(e.target.value);
// 						console.log(loginUsername);
// 					}}
// 				></input>
// 				<br />
// 				<label for="login_password">Password: </label>
// 				<br />
// 				<input
// 					type="password"
// 					onChange={(e) => {
// 						setLoginPassword(e.target.value);
// 						console.log(loginPassword);
// 					}}
// 				></input>
// 				<br />
// 				<button
// 					type="submit"
// 					onClick={() => {
// 						return loginUser();
// 					}}
// 				>
// 					Submit
// 				</button>
// 			</form>
// 		</div>
// 	);
// }

export default function Login() {
	const { user } = useSelector((state) => state.logged);
	const { show } = useSelector((state) => state.show);
	const dispatch = useDispatch();
	// helper variable for redirecting
	const history = useHistory();
	const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	// const [show, setShow] = useState(false);
	// const handleShow = () => setShow(true);
	// const handleClose = () => setShow(false);

	// takes current values of inputted username and password and submits it to the backend through auth-services
	const loginUser = () => {
		AuthService.login(loginUsername, loginPassword);
		// console.log(`Username: ${loginUsername} \nPassword: ${loginPassword}`);
	};

	const handleRedirect = () => {
		dispatch(setShow(false));
		history.push('/');
	};

	return (
		<>
			<Nav.Link className="nav-item" onClick={() => dispatch(setShow(true))}>
				Login
			</Nav.Link>

			<Modal
				show={show}
				onHide={() => dispatch(setShow(false))}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>

				{/* HTML Code */}
				<div className="login">
					<div className="hero">
						<ul>
							<h1> Login </h1>
						</ul>
						{/* <form onSubmit={handleRedirect}> */}
						<ul>
							<label for="register_username">Username: </label>
							<input
								type="text"
								onChange={(e) => {
									setLoginUsername(e.target.value);
								}}
							></input>
						</ul>

						<ul>
							<label for="login_password">Password: </label>
							<input
								type="password"
								onChange={(e) => {
									setLoginPassword(e.target.value);
								}}
							></input>
						</ul>

						<ul>
							<button
								className="button"
								type="submit"
								onClick={() => {
									handleRedirect();
									return loginUser();
								}}
							>
								Submit
							</button>
						</ul>
						{/* </form> */}
					</div>
				</div>
			</Modal>
		</>
	);
}
