import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { NavLink, Redirect } from "react-router-dom"
import './userProfile.css'
import Usericon from '../../static/images/usericon.png'
import AuthService from "../../services/auth-service";


function UserProfile() {
  const user = AuthService.getCurrentUser();

  const profile = (
      <div className='userProfile'>
        <div className="prof">
          <h1>Profile</h1>
        </div>
        {/* Main User Area */}
        <div className="profmain">
          <img className="usericon" src={Usericon}/>
          {/* Profile Info */}
          <div className="profinfo">
            <h5>Username</h5> {/* {latestUser["username"]} */}
            <h5>Degree</h5>
            <h5>Gender</h5>
            <h5>Other</h5>
          </div>

          {/* Skills feature */}
          <div className="skill">
            <div className="skillcard">
              <p>Skills Feature coming soon!</p>
            </div>
          </div>

          <div className="stat">
            <div className="statcard">
              <p>User statistics under development</p>
            </div>
          </div>
        </div>

        {/* Bio Area */}
        <div className="bio">
          <div className="biocard">
            <p>Bio Area</p>
          </div>
        </div>

        {/* Posts Area */}
        <div className="userposts">
          <div className="postinfo">
            <div className="yourpost">
              <h1>Your Posts</h1>
            </div>
            <div className="newpost">
            <button>
              <NavLink className="createPost" to="/makepost"> + Post</NavLink>
            </button>
            </div>
          </div>
          <div className="noposts">
            <div className="nopostscard">
              <p>Create your first post!</p>
            </div>
          </div>
          
          {/* DO NOT UNCOMMENT THIS */}
          {/* <div className="cards">
            <div className="card">
              <img src="https://via.placeholder.com/100"></img>
              <p>description</p>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/100"></img>
              <p>description</p>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/100"></img>
              <p>description</p>
            </div>
          </div> */}
        </div>

      </div>
    )
  const error = <div><Redirect to="/" />ERROR: Must be logged in to view this page</div>
  
  //Refactor this into state (convert this into a export class, refer to LoginModals.js)
  return user ? profile : error
}

export default UserProfile