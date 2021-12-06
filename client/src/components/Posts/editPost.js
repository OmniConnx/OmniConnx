import React, { Component } from "react";

// importing authService in order to use function that gets info of currently authenticated user
import authService from "../../services/auth-service";
import postsService from "../../services/postsService";

// form for submitting a post
class EditPostsComponent extends React.Component {
    constructor(props, id) {
        super(props); 

        // refs for title and body of post
    // refs for title and body of post
        //this.postTitle = 
        //this.postBody = 
        //this.id =id
    }


    //updatePost(this.body,this.title,this.id)
    render() {
        return (
            <div>
                <h1> Post submission </h1>
                <form>
                    <label for="postTitle"> Title: </label><br />
                    <input type="text" ref={this.postTitle}></input><br />
                    <label for="postBody"> Body: </label><br />
                    <textarea rows="4" cols="50" ref={this.postBody}></textarea><br />
                    <input type="button" value="Submit" onClick={this.submitPost}></input>
                </form>
            </div>
        )
    }


}