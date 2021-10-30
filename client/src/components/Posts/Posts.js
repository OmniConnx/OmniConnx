import React from "react"
import { NavLink } from "react-router-dom"
import "./Posts.css"
import Mentorpost from '../../static/images/mentor-post.png'
import Financialpost from '../../static/images/financial-post.png'
import Reviewspost from '../../static/images/reviews-post.png'

// Example of post object
// const examplePostData = [
//   {
//     _id: "1234567890",
//     user: {
//       username: "testUser",
//       profPic: "https://via.placeholder.com/150",
//       // ...
//     },
//     tags: ["tag1", "tag2", "tag3"],
//     image: "https://via.placeholder.com/600x250",
//     title: "example name of a post",
//     description: "this is an example of what a description on our post will look like",
//   },
//   {
//     _id: "0123456789",
//     user: {
//       username: "testUser",
//       profPic: "https://via.placeholder.com/150",
//       // ...
//     },
//     tags: ["tag1", "tag2"],
//     image: "https://via.placeholder.com/600x250",
//     title: "example name of a post number 2",
//     description: "this is an example of what a description on our post number 2 will look like",
//   },
// ]

function Posts() {
  // function post(postList) {
  //   return postList.map((post) => {
    // returns an array of tags divs from postsList object
  //     const tags = post.tags.map((tag) => {
  //       return <div>{tag}</div>
  //     })
    // returns a html parsed div
  //     return (
  //       <div className="post">
  //         <div className="prof">
  //           <div>
  //             <img src={post.user.profPic}></img>
  //           </div>
  //           <div>
  //             <h3>-{post.user.username}</h3>
  //             <h4>{post.title}</h4>
  //             <div className="tags">{tags}</div>
  //           </div>
  //         </div>
  //         {post.image ? <img src={post.image}></img> : ""}
  //         <p>{post.description}</p>
  //       </div>
  //     )
  //   })
  // }
  return (
    <div className="posts">
      <h1>POSTS</h1>
      {/* Create Post button */}
      <button>
        <NavLink className="createPost" to="/makepost"> + Post</NavLink>
      </button>

      <div className="blurbs">
          <img className="mentorpost" src={Mentorpost}/>
          <img className="financialpost" src={Financialpost}/>
          <img className="reviewspost" src={Reviewspost}/>
      </div>

      {/* <div className="displayPosts">{post(examplePostData)}</div> */}
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
