import React, { Component } from "react"
import { Form, Button, Nav, Modal } from "react-bootstrap"
import authService from "../../services/auth-service"

export default class Login extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })

  constructor(props) {
    super(props)

    // create react references to username and password input elements
    this.loginUsername = React.createRef()
    this.loginPassword = React.createRef()

    // declare function to login user on submit
    this.loginUser = this.loginUser.bind(this)
  }
  // takes current values of inputted username and password and submits it to the backend through auth-services
  loginUser() {
    authService.login(this.loginUsername.current.value, this.loginPassword.current.value)
    console.log(
      `Username: ${this.loginUsername.current.value} \nPassword: ${this.loginPassword.current.value}`
    )
  }

  render() {
    return (
      <>
        <Nav.Link className="nav-item" onClick={this.openModal}>
          Login
        </Nav.Link>

        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.loginUser}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control ref={this.loginUsername} type="email" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={this.loginPassword}
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={this.loginUser}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    )
  }
}
