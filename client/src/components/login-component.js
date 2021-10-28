import React, { Component } from "react";
//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";

import authService from "../services/auth-service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    // create react references to username and password input elements
    this.loginUsername = React.createRef();
    this.loginPassword = React.createRef();
  
    // declare function to register user on submit
    this.loginUser = this.loginUser.bind(this);
  }
    // takes current values of inputted username and password and submits it to the backend through auth-services
    loginUser() {
      alert('User was submitted with the username: ' + this.loginUsername.current.value);
      authService.login(this.loginUsername.current.value, this.loginPassword.current.value)
      console.log(`Username: ${this.loginUsername.current.value} \nPassword: ${this.loginPassword.current.value}`)

    }

  render() {
    return (
      <form onSubmit={this.loginUsername}>
      <label for="register_username">Username: </label><br />
      <input type="text" ref={this.loginUsername} ></input><br />
      <label for="login_password">Password: </label><br />
      <input type="password" ref={this.loginPassword} ></input><br />
      <input type="button" value="Submit" onClick={this.loginUser}></input>

    </form>
       
    );
  }
}

  /*
   <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
              
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
            <Modal.Body>

            <div className="form-group">
            <Form.Label htmlFor = "username">Username</Form.Label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
            <Form.Label htmlFor = "password">Password</Form.Label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

        
            </Modal.Body>
          </Form.Group>

        </Form>

  */