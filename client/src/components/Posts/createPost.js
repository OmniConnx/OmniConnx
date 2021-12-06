import React, { Component } from "react";

// importing authService in order to use function that gets info of currently authenticated user
import authService from "../../services/auth-service";
import postsService from "../../services/postsService";

// form for submitting a post
/*
var outputArr = []

useEffect(() => {
  getSkills().then(skills) =>
    setData(skills.data)
  })

})

const skillsArr = data.map(e => {

//for(var i = 0; i < skills.length; i++) {
    var opt = e.skillName;
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = skills[e.skillName]
    var label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(document.createTextNode(skills[e.skillName]));

    container.appendChild(checkbox);
    container.appendChild(label);

    
//}
})


*/

//function PostsComponent(){}
class PostsComponent extends React.Component {
    //const [data, setData] = useState(null)

    constructor(props) {
        super(props); 

        // refs for title and body of post
        this.postTitle = React.createRef(); 
        this.postBody = React.createRef(); 
        /*
        useEffect(() => {
            getSkills().then(skills => {
              var skillsData = skills.data
              setData(skillsData)

            })
          })
        */
        
        // function for submitting post
        this.submitPost = this.submitPost.bind(this);

    }


    //submits posts with title, body, and currently authenticated user's accessToken
    submitPost() {
        const title = this.postTitle.current.value
        const content = this.postBody.current.value
        const accessToken = authService.getCurrentUser().accessToken
        postsService.submitPost(title, content, accessToken)
    }

    //Creates an array of Refs from skills
    //const skillsArr  =  this.skills.map(() => createRef());
    /*
        getSelection(){
        outputSkills = []
        //Get checkbox values of skills
        for(var i = 0; i < skillsArr.length; i++){
            const refsArray  =  foo.map(eachId => ({id: eachId, ref: createRef()}));
            if (document.getElementById(this.skills[i].skillName).checked){
                outputSkills.append(document.getElementById(this.skills[i].skillName).value)
         
            }
        }
    }


    return (
        <div>
        {skillsArr.map( skill  
            => (
            <label for={skill.skillName}>{skill.skillName}</label>
            <input type = "checkbox" ref={skillsArr[index].current} value={skill.skillName} id = {skill.skillName}></input>
            )}
        </div>
    );

      for(var i = 0; i < skills.length; i++) {
        var opt = e.skillName;
        var checkbox = document.createElement("input");
        //var this.checkbox = React.createRef
        checkbox.type = "checkbox";
        //this.checkbox.value = skills[e.skillName]
        checkbox.value = skills[e.skillName]
        //var label = React.createRef
        var label = document.createElement('label')
        label.htmlFor = "id";
        label.appendChild(document.createTextNode(skills[e.skillName]));
    
        container.appendChild(checkbox);
        container.appendChild(label);
    }
    */


  
            
    render() {
        return (
            <div>
                <h1> Post submission </h1>
                <form>
                    <label for="postTitle"> Title: </label><br />
                    <input type="text" ref={this.postTitle}></input><br />
                    <label for="postBody"> Body: </label><br />
                    <textarea rows="4" cols="50" ref={this.postBody}></textarea><br />
   
                    <input type = "checkbox" ref = {this.checkbox}></input>
                    <button onClick={this.getSelection}> Add Skill </button>
                    <input type="button" value="Submit" onClick={this.submitPost}></input>
                </form>
            </div>
        )
    }
}

export default PostsComponent