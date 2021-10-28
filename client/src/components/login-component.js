import React, { Component } from "react";

import authService from "../services/auth-service";

export default class Login extends Component {
  constructor(props) {
    super(props);
    // create react references to username and password input elements
    this.loginUsername = React.createRef();
    this.loginPassword = React.createRef();
  
    // declare function to login user on submit
    this.loginUser = this.loginUser.bind(this);
  }
    // takes current values of inputted username and password and submits it to the backend through auth-services
    loginUser() {
      authService.login(this.loginUsername.current.value, this.loginPassword.current.value)
      console.log(`Username: ${this.loginUsername.current.value} \nPassword: ${this.loginPassword.current.value}`)
    }

  render() {
    return (
      <form onSubmit={this.loginUser}>
      <label for="register_username">Username: </label><br />
      <input type="text" ref={this.loginUsername} ></input><br />
      <label for="login_password">Password: </label><br />
      <input type="password" ref={this.loginPassword} ></input><br />
      <input type="button" value="Submit" onClick={this.loginUser}></input>

    </form>
       
    );
  }
}