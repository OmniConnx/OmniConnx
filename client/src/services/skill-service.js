import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/skill";

/*
// handles features for posts (submitting, updating, deleting, retrieving posts)
class skillsService {
    getSkills() {
        return axios.get(API_URL)
    }

    updateUserSkill(skillName, users, skillid) {
        axios.put("/update/"+ skillid, {
            skillName,
            users
        },
        {
            headers: {
                'x-access-token': accessToken
            }
        })
        .then(response => {
            if (response.status == '200') {
                console.log('Skill was successfully submitted')
            }
        })
        .catch(error => {
          console.log(error);
        });
    }

}

export default new skillsService()
*/