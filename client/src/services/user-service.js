/*import http from "../http-common";
import axios from 'axios';
import authHeader from './auth-header';
*/
import axios from 'axios';
import authHeader from './auth-header';

//API URL 
const API_URL = 'http://localhost:8080/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getUserID(id) {
    return axios.get(API_URL + 'user/'+ id)
  }

  updateUser(username, skills, accessToken, userid) {
      axios.put("/update/"+ userid, {
          username,
          skills
      },
      {
          headers: {
              'x-access-token': accessToken
          }
      })
      .then(response => {
          if (response.status == '200') {
              console.log('Post was successfully submitted')
          }
      })
      .catch(error => {
        console.log(error);
      });
  }

}

export default new UserService();

/*
class UserDataService {
  getAll() {
    return http.get("/user");
  }

  get(id) {
    return http.get(`/user/${id}`);
  }

  create(data) {
    return http.post("/user/signup", data);
  }

  update(id, data) {
    return http.put(`/user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByTitle(title) {
    return http.get(`/users?title=${title}`);
  }
  
}

export default new UserDataService();
*/