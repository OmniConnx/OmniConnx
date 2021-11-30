import React, { Component } from "react";

import authService from "../../services/auth-service";

// page for registering a user account
class RegisterUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      // formErrors: { username: '', password: '' },
      // usernameValid: false,
      // passwordValid: false,
      // formValid: false
    }


    // create react references to username and password input elements
    this.registerUsername = React.createRef();
    this.registerPassword = React.createRef();

    // declare function to register user on submit
    this.registerUser = this.registerUser.bind(this);
  }
  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
    //() => { this.validateField(name, value) }
    );
  }
  // validateField(fieldName, value) {
  //   let fieldValidationErrors = this.state.formErrors;
  //   let usernameValid = this.state.usernameValid;
  //   let passwordValid = this.state.passwordValid;
  
  //   switch(fieldName) {
  //     case 'username':
  //       usernameValid = value.length >= 6;
  //       fieldValidationErrors.password = usernameValid ? '': ' is too short';
  //     break;
  //     case 'password':
  //       passwordValid = value.length >= 6;
  //       fieldValidationErrors.password = passwordValid ? '': ' is too short';
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState({formErrors: fieldValidationErrors,
  //                   emailValid: usernameValid,
  //                   passwordValid: passwordValid
  //                 }, this.validateForm);
  // }
  
  // validateForm() {
  //   this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  // }
  
  // takes current values of inputted username and password and submits it to the backend through auth-services
  registerUser() {
    // authService.register(this.registerUsername.current.value, this.registerPassword.current.value)
    //console.log('helnfgaopewrhfbpaibusdpfijbasd')
    authService.register(this.state.username, this.state.password)
    console.log(`${this.state.username} username and reegister log check`)
    //console.log(`Username: ${this.registerUsername.current.value} \nPassword: ${this.registerPassword.current.value}`)
  }
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  function () {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  }

  render() {
    return (
      <div>
        {/* <h1>Registration</h1>
        <form className="needs-validation" onSubmit={this.registerUser} novalidate>
          <div>
            <label htmlFor="register_username">Username: </label><br />
            <input type="text" id="validationServer01" ref={this.registerUsername} className="form-control is-valid" defaultValue="" required></input>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
              Please choose a username.
            </div><br />
            <div id="validationServerUsernameFeedback" className="valid-feedback">
              Looks good!
            </div><br />
          </div>
          

          <label htmlFor="register_password">Password: </label><br />
          <input type="password" id="validationServer01" ref={this.registerPassword} required ></input>
          <div id="validationServerUPasswordFeedback" className="invalid-feedback">
          Please choose a password.
          </div><br />
          <input type="button" value="Submit" onClick={this.registerUser}></input>
        </form> */}

        {/* ---------------------------------------------------------------- */}
        {/* <form class="needs-validation" onSubmit={this.registerUser} noValidate>
          
            <div class="input-group form-outline">
              <input
                type="text"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                ref={this.registerUsername}
                required
              />
              <label for="validationCustomUsername" class="form-label">Username</label>
              <div class="invalid-feedback">Please choose a username.</div>
            </div>
          
            <div class="input-group form-outline">
              <input
                type="password"
                class="form-control"
                id="validationCustomPassword"
                aria-describedby="inputGroupPrepend"
                ref={this.registerPassword}
                required
              />
              <label for="validationCustomUsername" class="form-label">Password</label>
              <div class="invalid-feedback">Please choose a password.</div>
            </div>
          <input type="button" value="Submit" ></input>
        </form> */}
        
        <form className="row g-3 demo-form needs-validation" onSubmit={e => {
          e.preventDefault()
          this.registerUser()
          console.log('submit prevention loggggg')
        }}> 
        
 

          <div className="form-outline">
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              ref={this.registerUsername}
              required
              name="username"
              value = {this.state.username}
              onChange={(event) => this.handleUserInput(event)}
            />
            <label htmlFor="validationCustomUsername" className="form-label">Username</label>

            <div className="valid-feedback">Looks good!</div><br />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>

          <div className="form-outline">
            <input
              type="password"
              className="form-control"
              id="validationCustomPassword"
              ref={this.registerPassword} 
              required
              name='password'
              value={this.state.password}
              onChange={(event) => this.handleUserInput(event)}
            />
            <label htmlFor="validationCustomPassword" className="form-label">Password</label>

            <div className="valid-feedback">Looks good!</div><br />
            <div className="invalid-feedback">Please provide a password.</div>
          </div>

          <button value="submit" type="submit"  ></button><br></br>
        </form>

      </div>
    )
  }
}

export default RegisterUser