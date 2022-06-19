import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const updatedUser = (id, body) =>{
    return axios.put(`${API_URL}users/${id}`, body)
}

export default {updatedUser};
