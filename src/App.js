import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddUser from "./components/add-user-component";
import User from "./components/user-component";
import userList from "./components/user-list";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/user" className="navbar-brand">
            Users
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                All Users
              </Link>
            </li>
          
            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Create new User
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/user"]} component={userList} />
            <Route exact path="/signup" component={AddUser} />
            <Route path="/user/:id" component={User} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;