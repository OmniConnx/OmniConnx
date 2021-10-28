import React, { Component } from "react";

import authService from "../../services/auth-service";

// page for registering a user account
class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    
    // create react references to username and password input elements
    this.registerUsername = React.createRef();
    this.registerPassword = React.createRef();

    // declare function to register user on submit
    this.registerUser = this.registerUser.bind(this);
  }

  // takes current values of inputted username and password and submits it to the backend through auth-services
  registerUser() {
    authService.register(this.registerUsername.current.value, this.registerPassword.current.value)
    console.log(`Username: ${this.registerUsername.current.value} \nPassword: ${this.registerPassword.current.value}`)
  }

  render(){
    return (
      <form onSubmit={this.registerUser}>
        <label for="register_username">Username: </label><br />
        <input type="text" ref={this.registerUsername} ></input><br />
        <label for="register_password">Password: </label><br />
        <input type="password" ref={this.registerPassword} ></input><br />
        <input type="button" value="Submit" onClick={this.registerUser}></input>
      </form>
    )
  }
}

export default RegisterUser