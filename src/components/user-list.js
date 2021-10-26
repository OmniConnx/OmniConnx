import React, { Component } from "react";
import UserDataService from "../services/user-service";
import { Link } from "react-router-dom";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchFirstName = this.onChangeSearchFirstName.bind(this);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
    //this.removeAllUsers = this.removeAllUsers.bind(this);
    //this.searchUsername = this.searchUsername.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      //array of Users
      currentIndex: -1
      //searchUsername: ""
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  /*
  onChangeSearchTitle(e) {
    const searchUser = e.target.value;

    this.setState({
      searchUser: searchUsername
    });
  }
*/

  retrieveUsers() {
    UserDataService.getAll()
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.setState({
      currentUser: null,
      currentIndex: -1
    });
  }

  setActiveUser(user, index) {
    this.setState({
      currentUser: user,
      currentIndex: index
    });
  }
/*
  removeAllUsers() {
    SearchDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchUser() {
    SearchUser.findByName(this.state.searchUser)
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
*/
  
  render() {
    //const { searchUsername, users, currentUser, currentIndex } = this.state;
    const { users, currentUser, currentIndex } = this.state;

/*
<div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchUsername}
              onChange={this.onChangeSearchUser}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchUsername}
              >
                Search
              </button>
            </div>
          </div>
        </div>
           <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.username}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllUsers}
          >
            Remove All
          </button>

*/
    return (
      <div className="list row">
       Search
        <div className="col-md-6">
          <h4>User List</h4>

          <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.username}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentUser ? (
            <div>
              <h4>User</h4>
              <div>
                <label>
                  <strong>Username:</strong>
                </label>{" "}
                {currentUser.username}
              </div>

              <Link
                to={"/user/" + currentUser.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a User...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
