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

    //Creates an array of Refs from skills
    //skill1 = createRef() 
    //skill1.current.value = "skill name"

    //Each skill in array get converted to new ref
    //const skillsArr  =  skills.map((skill) => useRef(skill));

    //Generate list of checkboxes from skills array, and get array of refs

    //['skill1','skill2']
    //make for loop to make vars from skillnames

    //access each individual skill value
    
    const [checked, setChecked] = useState({})

 

    const showSkills = () => {
        return data.map( skill => {
            //console.log(checked)

            //for(var i = 0; i < skillsArr.length; i++){
            //append skill name to skill name arr top access thru index
            //}                 <input type = "checkbox" value = {checkbox}></input>

            // []  skill1
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
    
            
    return (
        <div>
            <h1> Post submission </h1>
            <form>
                <label for="postTitle"> Title: </label><br />

                <input type="text" onChange={(e) => {setPostTitle(e.target.value)}}></input><br />
                <label for="postBody"> Body: </label><br />
                <textarea rows="4" cols="50" onChange={(e) => {setBody(e.target.value)}}></textarea><br />

                {data ? showSkills() : 'loading'}
                <input type="button" value="Submit" onClick={submitPost(postTitle,postBody,checked)}></input>
            </form>
        </div>
    )
    
}

function submitPost(title,content, checked){

    const accessToken = authService.getCurrentUser().accessToken

    if (checked != {}){
        const skills = getSelection(checked)
        console.log(title, content, skills, accessToken)
        postsService.submitPost(title, content, skills, accessToken)


    }
}

// form for submitting a post
function getSelection(checked){
    var outputSkills = []
    //Get checkbox values of skills
    for (const [key, value] of Object.entries(checked)){
        console.log(key)
        outputSkills.push(key)
        //const refsArray  =  foo.map(eachId => ({id: eachId, ref: createRef()}));
        //if (element.checked){
        //    outputSkills.append(document.getElementById(skills[i].skillName).value)
     
        //}
    }
    
    return outputSkills

}

export default PostsComponent