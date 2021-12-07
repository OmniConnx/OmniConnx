import { React, useEffect, useState } from "react"

// importing authService in order to use function that gets info of currently authenticated user
import authService from "../../services/auth-service";
import postsService from "../../services/postsService";
import skillsService from "../../services/skill-service";


function PostsComponent(){
//class PostsComponent extends React.Component {

    const [data, setData] = useState(null)
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setBody] = useState('')

    useEffect(() => {
        skillsService.getSkills().then(skills => {
          var skillsData = skills.data
          setData(skillsData)

        })
      })
    
    const [checked, setChecked] = useState({})

    const showSkills = () => {
        return data.map( skill => {
         
            return (
                //setChecked(e => !e)}
                <div>
                    <label for={skill.skillName}> {skill.skillName} </label>
                    <input type = "checkbox" id = {skill.skillName} onChange={()=> {
                        var newChecked = {...checked}
                        newChecked[skill.skillName] ? newChecked[skill.skillName] = !newChecked[skill.skillName] : newChecked[skill.skillName] = true
                     
                        setChecked(newChecked)

                        
                    }}></input>

                </div>
            )
            
        })
    }
    const submitPost = () => {
        const title = postTitle
        const content = postBody

        const accessToken = authService.getCurrentUser().accessToken
    
        if (checked != {}){
            const skills = getSelection(checked)
            console.log("UPDATE")
            console.log(title, content, skills, accessToken)
            postsService.submitPost(title, content, skills, accessToken)
    
    
        }
    }

    // form for submitting a post
    const getSelection = () => {
        var outputSkills = []
        //Get checkbox values of skills
        for (const [key, value] of Object.entries(checked)){
            outputSkills.push(key)
            //const refsArray  =  foo.map(eachId => ({id: eachId, ref: createRef()}));
            //if (element.checked){
            //    outputSkills.append(document.getElementById(skills[i].skillName).value)
        
            //}
    }
    
    return outputSkills
}
            
    return (
        <div>
            <h1> Post submission </h1>
            <form>
                <label for="postTitle"> Title: </label><br />

                <input type="text" onChange={(e) => {setPostTitle(e.target.value)}}></input><br />
                <label for="postBody"> Body: </label><br />
                <textarea rows="4" cols="50" onChange={(e) => {setBody(e.target.value)}}></textarea><br />

                {data ? showSkills() : 'loading'}
                <input type="button" value="Submit" onClick={() => submitPost(postTitle,postBody,checked)}></input>
            </form>
        </div>
    )
    
}



export default PostsComponent