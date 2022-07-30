import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    // baseURL: 'https://store64-backend.herokuapp.com/',
    timeout: 1000
  });
  export default instance;