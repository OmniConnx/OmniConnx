import React, { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import './MakePost.css';

// Redux imports
// import { useDispatch } from 'react-redux';
// import { submitPost } from '../../reduxcomps/actions';

function MakePost() {
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
	const [titles, setTitle] = useState('');
	const [descs, setDesc] = useState('');
	const [tagTemp, setTempTag] = useState('');
	const [tagsSt, setTag] = useState([]);

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
					<button
						className="button-hover"
						onClick={(e) => {
							const post = {
								user: `placeholder`,
								tags: tagsSt,
								image: images,
								title: titles,
								description: descs,
							};
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
