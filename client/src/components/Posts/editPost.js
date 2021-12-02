import React, { Component } from "react";

// importing authService in order to use function that gets info of currently authenticated user
import authService from "../../services/auth-service";
import postsService from "../../services/postsService";

// form for submitting a post
class EditPostsComponent extends React.Component {
    constructor(props, id) {
        super(props); 

        // refs for title and body of post
        this.id =id
    }
    //updatePost(this.body,this.title,this.id)

}