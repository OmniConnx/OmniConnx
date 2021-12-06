import React from "react"
import { Redirect } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import Login from "../Login/Login"
import Register from "../Register/Register"
import "./navbar.css"
import Logo from "../../static/images/logo.png"
import { Component } from "react"
import AuthService from "../../services/auth-service"

export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
    this.user = AuthService.getCurrentUser()
    this.logoutUser = this.logoutUser.bind(this)
  }
  logoutUser() {
    AuthService.logout()
    return <Redirect to="/" />
  }

  //function NavigationBar() {
  render() {
    return (
      <Navbar expand="lg" variant="light" className="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Logo Section */}
            <Nav className="me-auto">
              <Navbar.Brand href="/">
                <img
                  src={Logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="OmniConnx Logo"
                />
              </Navbar.Brand>
            </Nav>

            {/* Links Section */}
            <Nav>
              <Nav.Link className="nav-item" href="/posts">
                Posts
              </Nav.Link>
              {/* Conditional rendering of logged-in features */}
              {this.user && (
                <Nav.Link className="nav-item" href="/prof">
                  Profile
                </Nav.Link>
              )}
              {!this.user && <Register />}
              {!this.user && <Login />}
              {this.user && (
                <Nav.Link className="nav-item" onClick={this.logoutUser}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  //}
}

//export default NavigationBar
