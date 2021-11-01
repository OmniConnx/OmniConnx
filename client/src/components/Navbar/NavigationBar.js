import React from "react"
// import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import LoginModal from "./LoginModal"
import "./navbar.css"
import Logo from '../../static/images/logo.png'

function NavigationBar() {
  return (
    // <div className="navbar">
    //   <div>
    //     <NavLink to="/">OmniConnx</NavLink>
    //   </div>
    //   <div>
    //     <NavLink to="/prof">profileTest</NavLink>
    //     <NavLink to="/posts">Posts</NavLink>
    //   </div>
    // </div>
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
            <Nav.Link className="nav-item" href="/prof">Profile</Nav.Link>
            <Nav.Link className="nav-item" href="/register">Register</Nav.Link>
            <Nav.Link className="nav-item" href="/login">Login page</Nav.Link>
            <LoginModal/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
