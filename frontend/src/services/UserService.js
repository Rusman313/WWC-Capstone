import axios from "axios";

const QUIZ_REST_API_URL = "http://localhost:8080/user/names";

class UserService {
  getUserNames() {
    return axios.get(QUIZ_REST_API_URL);
  }
}

export default new UserService();
