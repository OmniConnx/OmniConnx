import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink, Redirect } from 'react-router-dom';
import './userProfile.css';
import Usericon from '../../static/images/usericon.png';
import AuthService from '../../services/auth-service';
import skillsService from '../../services/skill-service';
import { useSelector } from 'react-redux';

//do get all request

var select = document.getElementById('selectSkill');
var skillsArr = [];

//const user = AuthService.getCurrentUser()
//const [data, setData] = useState(null)
/*
useEffect(() => {
  getSkills().then(skills) =>
    setData(skills.data)
  })

})

const skillsArr = data.map(e => {

//for(var i = 0; i < skills.length; i++) {
  var opt = e.skillName;
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
//}
})

function getSelection(){
  const user = AuthService.getCurrentUser();

  for(var i = 0; i < skillsArr.length; i++){
    if (skillsArr[i] == select.value){
      
      updateUser(skillsArr[i].data.skill, user, skillsArr[i].data.id)
      //Removes selected skill from list
    }
  }

}
*/

/*
var select = document.getElementById("selectSkill");
var skillsArr = [];

//const user = AuthService.getCurrentUser()
//const [data, setData] = useState(null)
useEffect(() => {
  var skills = getSkills()

  for(var i = 0; i < skills.length; i++) {
    var opt = skills[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }

})

function getSelection(){
  const user = AuthService.getCurrentUser();

  const profile = (
      <div className='userProfile'>
        <div className="prof">
          <h1>Profile</h1>
        </div>
        {/* Main User Area */
// <div className="profmain">
//   <img className="usericon" src={Usericon}/>
//   {/* Profile Info */}
//   <div className="profinfo">
//     <h5>{ user.username }</h5>
//     <h5>Degree</h5>
//     <h5>Gender</h5>
//     <h5>Other</h5>
//   </div>

{
	/* Skills feature */
}
{
	/* <select id="selectSkill">
            <option>Select a Skill</option>
        </select>
        <button onClick="getSelection()"> Add Skill </button>

          <div className="skill">
            <div className="skillcard">
              <p>Skills Feature coming soon!</p>
            </div>
          </div> */
}

function UserProfile() {
	const { user } = useSelector((state) => state.logged);
	// returns access token
	const currUserFun = () => {
		if (user) {
			const currUser = JSON.parse(window.localStorage.getItem('USER_STATE'));
			const currUserInfo = JSON.parse(currUser.logged.user);
			return currUserInfo.username;
		}
	};
	const profile = (
		<div className="userProfile">
			<div className="prof">
				<h1>Profile</h1>
			</div>
			{/* Main User Area */}
			<div className="profmain">
				<img className="usericon" src={Usericon} />
				{/* Profile Info */}
				<div className="profinfo">
					<h5>{currUserFun()}</h5>
					<h5>Degree</h5>
					<h5>Gender</h5>
					<h5>Other</h5>
				</div>

				{/* Skills feature */}
				<select id="selectSkill">
					<option>Select a Skill</option>
				</select>
				<button onClick="getSelection()"> Add Skill </button>

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
							<NavLink className="createPost" to="/makepost">
								{' '}
								+ Post
							</NavLink>
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
	);
	const error = (
		<div>
			<Redirect to="/" />
			ERROR: Must be logged in to view this page
		</div>
	);

	//Refactor this into state (convert this into a export class, refer to LoginModals.js)
	return user ? profile : error;
}

export default UserProfile;
