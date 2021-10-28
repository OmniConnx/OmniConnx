import axios from "axios";

const API_URL = "http://localhost:8080/user";

//handles authentication for the user (login, logout, register) and also can get the currently authenticated user's info

class AuthService {
  
  // authenticates user and saves accessToken in localStorage
  login(username, password) {
    axios
    .post(API_URL + "/signin", {
      username,
      password
    })
    .then(response => {
      if (response.data.accessToken) {
        // saves accesstoken to browser's local storage
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(window.localStorage.getItem('user'))
      }
    })
    .catch(function (error) {
      console.log(error);
    });
     
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password) {
    axios.post(`${API_URL}/signup`, {
      username,
      password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();