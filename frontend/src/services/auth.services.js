import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (name, email, password, phone, type) => {
  return axios.post(API_URL + "signup", {
    name,
    email,
    password,
    phone,
    type
  });
};

const login = (phone, password) => {
  return axios
    .post(API_URL + "signin", {
      phone,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};