import { loginSubmit } from '../../reduxcomps/actions';
import { useDispatch, useSelector } from 'react-redux';
import AuthService from '../../services/auth-service';
import React, { useState } from 'react';
import { Modal, Button, Nav, Form } from 'react-bootstrap';
import {
	HashRouter as Router,
	Route,
	Switch,
	Link,
	useHistory,
} from 'react-router-dom';
import RegisterUser from '../Register/RegisterUser';

function LoginModal() {
	const { user } = useSelector((state) => state.logged);
	const dispatch = useDispatch();
	// redirecting variables
	const history = useHistory();
	const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	// takes current values of inputted username and password and submits it to the backend through auth-services
	const loginUser = () => {
		AuthService.login(loginUsername, loginPassword);
		// console.log(`Username: ${loginUsername} \nPassword: ${loginPassword}`);
	};

	const handleRedirect = () => {
		history.push('/');
	};

	return (
		<>
			<Nav.Link className="nav-item" onClick={handleShow}>
				Login
			</Nav.Link>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Log In</Modal.Title>
				</Modal.Header>

				{/* HTML Code */}
				<div>
					<h1> Login </h1>
					<form onSubmit={handleRedirect}>
						<label for="register_username">Username: </label>
						<br />
						<input
							type="text"
							onChange={(e) => {
								setLoginUsername(e.target.value);
							}}
						></input>
						<br />
						<label for="login_password">Password: </label>
						<br />
						<input
							type="password"
							onChange={(e) => {
								setLoginPassword(e.target.value);
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
					</form>
				</div>
			</Modal>
		</>
	);
}

export default LoginModal;

// export default LoginModal

// function LoginModal() {
// 	const [show, setShow] = useState(false);

// 	const handleShow = () => setShow(true);
// 	const handleClose = () => setShow(false);

// 	// useState + Redux

// 	const dispatch = useDispatch();
// 	const [emailS, setEmail] = useState('');
// 	const [passwordS, setPassword] = useState('');
// 	function handleSubmit(event) {
// 		event.preventDefault();
// 	}

// 	return (
// 		<>
// 			<Nav.Link className="nav-item" onClick={handleShow}>Login</Nav.Link>

// 			<Modal
// 				show={show}
// 				onHide={handleClose}
// 				backdrop="static"
// 				keyboard={false}
// 			>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Log In</Modal.Title>
// 				</Modal.Header>
// 				<Form onSubmit={handleSubmit}>
// 					<Modal.Body>
// 						<Form.Group className="mb-3" controlId="formBasicEmail">
// 							<Form.Label>Email address</Form.Label>
// 							<Form.Control
// 								type="email"
// 								placeholder="Enter email"
// 								onChange={(e) => {
// 									setEmail(e.target.value);
// 								}}
// 							/>
// 							<Form.Text className="text-muted">
// 								We'll never share your email with anyone else.
// 							</Form.Text>
// 						</Form.Group>

// 						<Form.Group className="mb-3" controlId="formBasicPassword">
// 							<Form.Label>Password</Form.Label>
// 							<Form.Control
// 								type="password"
// 								placeholder="Password"
// 								onChange={(e) => {
// 									setPassword(e.target.value);
// 								}}
// 							/>
// 						</Form.Group>

// 						<Form.Group className="mb-3" controlId="formBasicCheckbox">
// 							<Form.Check type="checkbox" label="remember me" />
// 						</Form.Group>
// 					</Modal.Body>
// 					<Modal.Footer>
// 						<Button variant="secondary" onClick={handleClose}>
// 							Close
// 						</Button>
// 						<Button
// 							variant="primary"
// 							type="submit"
// 							onClick={useDispatch(loginSubmit(emailS, passwordS))}
// 						>
// 							Submit
// 						</Button>
// 						{/* <button type="submit">Submit</button> */}
// 					</Modal.Footer>
// 				</Form>
// 			</Modal>
// 		</>
// 	);
// }
