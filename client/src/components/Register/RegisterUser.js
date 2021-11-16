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
  // // Example starter JavaScript for disabling form submissions if there are invalid fields
  // function () {
  //   'use strict'

  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //   var forms = document.querySelectorAll('.needs-validation')

  //   // Loop over them and prevent submission
  //   Array.prototype.slice.call(forms)
  //     .forEach(function (form) {
  //       form.addEventListener('submit', function (event) {
  //         if (!form.checkValidity()) {
  //           event.preventDefault()
  //           event.stopPropagation()
  //         }

  //         form.classList.add('was-validated')
  //       }, false)
  //     })
  // }

  render(){
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.registerUser}>
          <label for="register_username">Username: </label><br />
          <input type="text" id="validationServer01" ref={this.registerUsername} ></input>
          <div id="validationServerUsernameFeedback" class="invalid-feedback">
          Please choose a username.
          </div><br />

          <label for="register_password">Password: </label><br />
          <input type="password" id="validationServer01" ref={this.registerPassword} ></input>
          <div id="validationServerUPasswordFeedback" class="invalid-feedback">
          Please choose a password.
          </div><br />
          <input type="button" value="Submit" onClick={this.registerUser}></input>
        </form>
      </div>
    )
  }
}

export default RegisterUser