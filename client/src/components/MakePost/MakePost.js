import React, { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './MakePost.css';
import postsService from '../../services/postsService';
import authService from '../../services/auth-service';
import skillsService from '../../services/skill-service';
import { useSelector } from 'react-redux';

// Redux imports
// import { useDispatch } from 'react-redux';
// import { submitPost } from '../../reduxcomps/actions';

function MakePost() {
	const { user } = useSelector((state) => state.logged);
	// Redirect helper variable
	let history = useHistory();
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});
	const images = files.map((file) => (
		<div key={file.name}>
			<div>
				<img
					src={file.preview}
					style={{ width: 200, height: 200 }}
					alt="preview"
				/>
			</div>
		</div>
	));

	// For Redux useState variables
	const [data, setData] = useState(null);
	const [checked, setChecked] = useState({});
	const [titles, setTitle] = useState('');
	const [descs, setDesc] = useState('');
	const [tagTemp, setTempTag] = useState('');
	const [tagsSt, setTag] = useState([]);

	// useEffect(() => {
	// 	skillsService.getSkills().then((skills) => {
	// 		var skillsData = skills.data;
	// 		setData(skillsData);
	// 	});
	// });

	const currUser = JSON.parse(window.localStorage.getItem('USER_STATE'));
	const newCurrUser = currUser.logged.user;
	const parseNew = JSON.parse(newCurrUser); // do accessToken.accessToken to get this
	const accessToken = parseNew.accessToken;

	// submitPost method

	const submitPost = () => {
		// Auth service

		history.push('/posts');
		const skills = getSelection(checked);
		// postsService.submitPost(titles, descs, skills, accessToken.accessToken);
		postsService.submitPost(titles, descs, skills, accessToken);
	};

	// const showSkills = () => {
	// 	return data.map((skill) => {
	// 		return (
	// 			//setChecked(e => !e)}
	// 			<div>
	// 				<label for={skill.skillName}> {skill.skillName} </label>
	// 				<input
	// 					type="checkbox"
	// 					id={skill.skillName}
	// 					onChange={() => {
	// 						var newChecked = { ...checked };
	// 						newChecked[skill.skillName]
	// 							? (newChecked[skill.skillName] = !newChecked[skill.skillName])
	// 							: (newChecked[skill.skillName] = true);

	// 						setChecked(newChecked);
	// 					}}
	// 				></input>
	// 			</div>
	// 		);
	// 	});
	// };

	const getSelection = () => {
		var outputSkills = [];
		//Get checkbox values of skills
		for (const [key, value] of Object.entries(checked)) {
			outputSkills.push(key);
			//const refsArray  =  foo.map(eachId => ({id: eachId, ref: createRef()}));
			//if (element.checked){
			//    outputSkills.append(document.getElementById(skills[i].skillName).value)

			//}
		}

		return outputSkills;
	};

	return (
		<div className="main">
			<form className="form">
				<h1 className="title">Create a post</h1>
				<input
					type="text"
					placeholder="Title..."
					className="titleInput"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<textarea
					type="text"
					className="text"
					placeholder="Text (optional)"
					onChange={(e) => {
						setDesc(e.target.value);
					}}
				/>

				<div {...getRootProps()} className="img-input">
					<input {...getInputProps()} />
					{files.length !== 0 ? (
						images
					) : (
						<div>
							<p>Drop files here or </p>
							<button className="button-hover">Upload</button>
						</div>
					)}
				</div>

				<div className="tagSec">
					<div>
						<h3>Add a Tag </h3>
						<input
							type="text"
							className="tags"
							onChange={(e) => {
								if (tagTemp.length < 10) {
									setTempTag(e.target.value);
								} else {
								}
							}}
							value={tagTemp}
						/>
						<button
							className="addTagsButton"
							onClick={() => {
								setTag((tagsSt) => [...tagsSt, tagTemp]);
								setTempTag('');
							}}
						>
							Add
						</button>
					</div>
					<div>
						<h3>Tags: </h3>
						<div className="disTag">
							{tagsSt.map((tag) => {
								return <div className="tag">{tag}</div>;
							})}
						</div>
					</div>
				</div>
				<div className="button-bottoms">
					<button className="button-hover" type="submit">
						Cancel
					</button>
					{/* <button className="button-hover">
						<Link
							style={{ textDecoration: 'none', color: 'white' }}
							value="Submit"
							to={`/posts`}
							onClick={() => {
								submitPost();
							}}
						>
							Submit
						</Link>
					</button> */}
					{/* {data ? showSkills() : 'loading'} */}
					<button
						className="button-hover"
						value="Submit"
						onClick={() => {
							submitPost();
							window.alert('Your post was successfully created.');
						}}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
export default MakePost;
