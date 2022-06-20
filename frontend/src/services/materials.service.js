import axios from "axios";

const API_URL = "http://localhost:8080/api/";
const getMat = () =>{
    return  axios.get(`${API_URL}` + "materials")
} 

export default { getMat };