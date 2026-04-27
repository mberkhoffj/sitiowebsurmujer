import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const instance = axios.create({
    timeout: 60000
});
export default instance;