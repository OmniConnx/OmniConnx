/*
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

  getOneUser(){
    this.UserDataService.GetOne()
    .map(response => response.json())
    .do( response => {
        ......
    }, error => {
        ......
    });
  }
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

*/