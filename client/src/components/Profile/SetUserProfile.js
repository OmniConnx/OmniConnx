import { useDropzone } from 'react-dropzone';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SetSkills from './SetSkills';

// Stylesheet

import './setUserProfile.css';

function SetProfile() {
	const [files, setFiles] = useState([]);

	const [skillsDisplay, setSkillsDisplay] = useState([]);

	const [username, setUsername] = useState('');
	const [degree, setDegree] = useState('');
	const [gender, setGender] = useState('');
	const [other, setOther] = useState('');

	const [skills, setSkills] = useState([]);

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
					style={{ width: 250, height: 'auto', borderRadius: 200 }}
					alt="preview"
				/>
			</div>
		</div>
	));

	return (
		<div className="set-user-profile">
			<div className="container column">
				<div className="profmain">
					<div {...getRootProps()} className="prof-pic">
						<input {...getInputProps()} />
						{images.length !== 0 ? (
							<div className="img-added"> {images}</div>
						) : (
							<div className="img-input">
								<p> Profile Picture </p>
								<button> Upload here </button>
							</div>
						)}
					</div>
					<div className="profinfo">
						<input
							type="text"
							className="input-text"
							placeholder="Username..."
							onChange={(e) => setUsername(e.target.value)}
						/>
						<input
							type="text"
							className="input-text"
							placeholder="Degree..."
							onChange={(e) => setDegree(e.target.value)}
						/>
						<input
							type="text"
							className="input-text"
							placeholder="Gender..."
							onChange={(e) => setGender(e.target.value)}
						/>
						<input
							type="text"
							className="input-text"
							placeholder="Other..."
							onChange={(e) => setOther(e.target.value)}
						/>
					</div>
				</div>
				<div className="column">
					<h2>Your skills</h2>

					<div
						style={{
							display: 'flex',
							border: '1px black solid',
							width: '50vw',
							height: '50vh',
							margin: 10,
							padding: 10,
						}}
					>
						<div>
							{/* <label>
								{' '}
								<h4>Add a new skill</h4>
							</label> */}
							{/* <button
								style={{ marginLeft: '1vw' }}
								onClick={() => {
									setSkillsDisplay((skillsDisplay) => [...skillsDisplay, 'hi']);
								}}
							>
								+
							</button> */}
							<SetSkills />

							{typeof skillsDisplay !== undefined
								? skillsDisplay.map((each, index) => {
										return (
											<div key={index}>
												<div style={{ marginTop: 50 }}>
													<div
														style={{
															display: 'flex',
															flexDirection: 'column',
															alignItems: 'center',
														}}
													>
														<h2> Name of Skill </h2>
														<div
															style={{
																display: 'flex',
																flexDirection: 'row',
																alignItems: 'center',
															}}
														>
															<button
																style={{
																	display: 'flex',
																	flexDirection: 'row',
																	alignItems: 'center',
																	justifyContent: 'center',
																	width: 15,
																	marginRight: 10,
																}}
															>
																<h4
																	style={{
																		display: 'flex',
																		flexDirection: 'row',
																	}}
																>
																	{' '}
																	<div
																		style={{ color: 'tomato', marginLeft: 10 }}
																	>
																		-
																	</div>
																	1{' '}
																</h4>{' '}
															</button>

															<button
																style={{
																	display: 'flex',
																	flexDirection: 'row',
																	alignItems: 'center',
																	justifyContent: 'center',
																	width: 15,
																}}
															>
																<h4
																	style={{
																		display: 'flex',
																		flexDirection: 'row',
																		marginLeft: 10,
																	}}
																>
																	{' '}
																	<div style={{ color: 'lightgreen' }}>
																		+
																	</div>3{' '}
																</h4>{' '}
															</button>
														</div>
													</div>
												</div>
											</div>
										);
								  })
								: skillsDisplay}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SetProfile;
