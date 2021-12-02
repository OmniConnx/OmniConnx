import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/skill";


// handles features for posts (submitting, updating, deleting, retrieving posts)
class skillsService {
    getSkills() {
        return axios.get(API_URL)
    }

}

export default new skillsService()