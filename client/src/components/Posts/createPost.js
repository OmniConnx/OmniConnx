import React, { Component } from 'react';

// importing authService in order to use function that gets info of currently authenticated user
import authService from '../../services/auth-service';
import postsService from '../../services/postsService';

// form for submitting a post
class PostsComponent extends React.Component {
	constructor(props) {
		super(props);

		// refs for title and body of post
		this.postTitle = React.createRef();
		this.postBody = React.createRef();

		// function for submitting post
		this.submitPost = this.submitPost.bind(this);
	}

	//submits posts with title, body, and currently authenticated user's accessToken
	submitPost() {
		const title = this.postTitle.current.value;
		const content = this.postBody.current.value;
		const accessToken = authService.getCurrentUser().accessToken;
		postsService.submitPost(title, content, accessToken);
	}

	render() {
		return (
			<div>
				<h1> Post submission </h1>
				<form>
					<label for="postTitle"> Title: </label>
					<br />
					<input type="text" ref={this.postTitle}></input>
					<br />
					<label for="postBody"> Body: </label>
					<br />
					<textarea rows="4" cols="50" ref={this.postBody}></textarea>
					<br />
					<input type="button" value="Submit" onClick={this.submitPost}></input>
				</form>
			</div>
		);
	}
}

export default PostsComponent;
