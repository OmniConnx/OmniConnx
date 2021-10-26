import http from "../http-common";

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
    return http.put(`/users/${id}`, data);
  }
/*
  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }

  findByTitle(title) {
    return http.get(`/users?title=${title}`);
  }
  */
}

export default new UserDataService();