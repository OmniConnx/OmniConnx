import { loginSubmit } from '../../reduxcomps/actions';
import { useDispatch } from 'react-redux';
import React, { useState } from "react"
import { Modal, Button, Nav, Form } from "react-bootstrap"
import AddUser from "../add-user-component";
import User from "../user-component";
import UserList from "../user-list";
import { HashRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom"

function LoginModal() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <Nav.Link className="nav-item" onClick={handleShow} >Login</Nav.Link>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Switch>
        <Route to={"/signup"} component={AddUser} />

        </Switch>

      </Modal>
    </>
  )
}

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

export default LoginModal;
