import axios from "axios";
import { serverURL } from "./constants";

const instance = axios.create({
    baseURL: serverURL,
    timeout: 1000
  });
  export default instance;