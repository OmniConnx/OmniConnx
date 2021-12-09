import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/post';

// handles features for posts (submitting, updating, deleting, retrieving posts)
class postsService {
	// makes a POST req to backend to submit post into the database
	// takes in title and body of post as well as the author
	submitPost(title, content, skills, accessToken) {
		axios
			.post(
				`${API_URL}/create`,
				{
					title,
					content,
					skills,
				},
				{
					headers: {
						'x-access-token': accessToken,
					},
				}
			)
			.then((response) => {
				if (response.status == '200') {
					console.log('Post was successfully submitted');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	//updates a specific post
	updatePost(title, content, accessToken, postid, skills) {
		axios
			.put(
				'/update/' + postid,
				{
					title,
					content,
					skills,
				},
				{
					headers: {
						'x-access-token': accessToken,
					},
				}
			)
			.then((response) => {
				if (response.status == '200') {
					console.log('Post was successfully updated');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	//deletes a specific post

	deletePost(postid, accessToken) {
		axios.delete(API_URL + '/delete/' + postid, {
			headers: {
				'x-access-token': accessToken,
			},
			data: postid,
		});
	}

	//retrieve a number of latest posts, if origin is 0 then get the latest posts submitted to database
	// if !origin === 0 then pass a userID to get latests posts from a specific user
	getPosts() {
		return axios.get(API_URL);
		//.then(function(posts){
		//  console.log(posts)
		//}
		//);
	}
	//getPosts()
}

export default new postsService();
