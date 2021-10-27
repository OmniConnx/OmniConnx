import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import authService from "../services/auth-service";

function RegisterUser() {
  function registerData() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      authService.register(username, password)
  }
  return (
    <form onSubmit="return registerData()">
      <label for="username">Username: </label><br>
      <input type="text" id="username"></input><br>
      <label for="password">Password: </label><br>
      <input type="password" id="password"></input><br>
      <input type="submit" value="Submit"></input>
    </form>
  )
}