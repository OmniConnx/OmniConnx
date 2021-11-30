import React from "react"
// import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import LoginModal from "./LoginModal"
import "./navbar.css"
import Logo from '../../static/images/logo.png'
import { Component } from "react"
import AuthService from "../../services/auth-service";

function myFunc(){
  return AuthService.logout();
};

export default class NavigationBar extends Component{
  constructor(props) {
    super(props);
    this.user = AuthService.getCurrentUser();
}


  //function NavigationBar() {
  render(){
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
              <Nav.Link className="nav-item" href="/posts">Posts</Nav.Link>
              {/* Conditional rendering of logged-in features */}
              {this.user && <Nav.Link className="nav-item" href="/prof">Profile</Nav.Link>}
              {!this.user && <Nav.Link className="nav-item" href="/register">Register</Nav.Link>}
              {!this.user && <Nav.Link className="nav-item" href="/login">Login page</Nav.Link>}
              {/* {this.user && <Nav.Link className="nav-item" onClick={myFunc()}>Logout</Nav.Link>} */}
              {!this.user && <LoginModal/>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  //}
}

//export default NavigationBar
