import { React, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';

import Mentorpost from '../../static/images/mentor-post.png'
import Financialpost from '../../static/images/financial-post.png'
import Reviewspost from '../../static/images/reviews-post.png'
import AuthService from "../../services/auth-service";
import skillsService from "../../services/skill-service"
import UserService from "../../services/user-service"

function Skills() {
	//const { user } = useSelector((state) => state.logged);

	const [data, setData] = useState(null);
	useEffect(() => {
        skillsService.getSkills().then(skills => {
          setData(skills.data)
          // console.log(posts.data)
        })
      })
	// Gets post from database and returns parsed jsx elements
	//          <input type="button" value="Submit" onClick={deletePost(e._id)}></input>

	const generateSkills = () => {
		return data.map((e) => {

			return (
				<div className="blurbs">
					<div className="postHead">
						<h1>{e.skillName}</h1>
                    </div>
				
				</div>
			);
		});
	};

	return (
		<div className="skills">
			<h1>SKILLS</h1>

			{/* Create Post button | Accessed via log-in*/}
			{/* DisplaysPosts */}
			<div className="displaySkills">{data ? generateSkills() : 'loading'}</div>

			{/* PlaceholderPosts */}
		
		</div>
	);
}

export default Skills;
