import { React, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "./Posts.css"
import Mentorpost from '../../static/images/mentor-post.png'
import Financialpost from '../../static/images/financial-post.png'
import Reviewspost from '../../static/images/reviews-post.png'
import AuthService from "../../services/auth-service";
import postsService from "../../services/postsService"
import UserService from "../../services/user-service"

function Posts() {
  const user = AuthService.getCurrentUser()
  const [data, setData] = useState(null)
  useEffect(() => {
    postsService.getPosts().then(posts => {
      var ourData =posts.data
      ourData.forEach(element => {
        const username = UserService.getUserID(element.author)
        username.then(element =>{
          element.author = username
          console.log(element.author)
          
        })

      });
      setData(ourData)
      //for each create new promise
      // console.log(posts.data)
    })
  })
  // Gets post from database and returns parsed jsx elements
  const generatePosts = () => {

    const postList = data.map(e => {
      //Testing getting author name

      return(
        <div className = 'blurbs'>
          <div className='postHead'>
            <h1>{e.title}</h1>
            <h1>{e.author}</h1>
          </div>
          <p>{e.content}</p>
        </div>
      )
    })
    return postList
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
        {data ? generatePosts() : 'loading'}
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
