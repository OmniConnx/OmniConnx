import React from "react"
import { NavLink } from "react-router-dom"
import "./Posts.css"
import Mentorpost from '../../static/images/mentor-post.png'
import Financialpost from '../../static/images/financial-post.png'
import Reviewspost from '../../static/images/reviews-post.png'
import AuthService from "../../services/auth-service";
import postsService from "../../services/postsService"

function Posts() {
  const user = AuthService.getCurrentUser()

  // Gets post from database and returns parsed jsx elements
  const generatePosts = () => {
    postsService.getPosts().then(posts => {
      const postList = posts.data.map(e => <div>{e.content}</div>)
      console.log(postList)
      return postList
    })
  }

  return (
    <div className="posts">
      <h1>POSTS</h1>

      {/* Create Post button | Accessed via log-in*/}
      {user &&
        <button>
          <NavLink className="createPost" to="/createPost"> + Post</NavLink>
        </button>
      }
      
      {/* DisplaysPosts */}
      <div className="displayPosts">
        {generatePosts()}
      </div>
      
      {/* PlaceholderPosts */}
      <div className="blurbs">
          <img className="mentorpost" src={Mentorpost} alt=""/>
          <img className="financialpost" src={Financialpost} alt=""/>
          <img className="reviewspost" src={Reviewspost} alt=""/>
      </div>

    </div>
  )
}

export default Posts

// !!!DO NOT UNCOMMENT THIS!!!
// <button onClick={post({
//     user:{session.user},
//     tags:[tag1, tag2],
//     title:'example name of a post number 2',
//     image:'./place',
//     description:'this is an example of what a description on our post number 2 will look like',
// })}>
//     post
// </button>
