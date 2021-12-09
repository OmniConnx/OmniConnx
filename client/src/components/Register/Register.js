import React, { Component } from "react"
import { Form, Button, Nav, Modal } from "react-bootstrap"
import authService from "../../services/auth-service"

// page for registering a user account
class Register extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })

  constructor(props) {
    super(props)

    // create react references to username and password input elements
    this.registerUsername = React.createRef()
    this.registerPassword = React.createRef()

    // declare function to register user on submit
    this.registerUser = this.registerUser.bind(this)
  }

  // takes current values of inputted username and password and submits it to the backend through auth-services
  registerUser() {
    const username = this.registerUsername.current.value
    const password = this.registerPassword.current.value
    authService.register(username, password)
    console.log(`Username: ${username} \nPassword: ${password}`)
  }

  render() {
    return (
      <>
        <Nav.Link className="nav-item" onClick={this.openModal}>
          Register
        </Nav.Link>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.registerUser}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  ref={this.registerUsername}
                  type="text"
                  placeholder="Enter username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={this.registerPassword}
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={this.registerUser}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    )
  }
}

export default Register
