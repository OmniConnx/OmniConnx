import axios from "axios";

const API_URL = "http://localhost:8080/post";

// handles features for posts (submitting, updating, deleting, retrieving posts)
class postsService {

    // makes a POST req to backend to submit post into the database
    // takes in title and body of post as well as the author 
    submitPost(title, content, accessToken) {
        axios
        .post(`${API_URL}/create`, {
            title,
            content
        },
        {
            headers: {
                'x-access-token': accessToken
            }
        })
        .then( response => {
            if (response.status == '200') {
                console.log('Post was successfully submitted')
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    //updates a specific post
    updatePost(title, body, userid, postid) {}

    //deletes a specific post 
    deletePost(postid) {}

    //retrieve a number of latest posts, if origin is 0 then get the latest posts submitted to database
    // if !origin === 0 then pass a userID to get latests posts from a specific user
    getPosts(origin = 0) {}

    getPostID() {}
}

export default new postsService();