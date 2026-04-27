import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.baseURL = process.env.VUE_APP_API_URL

const instance = axios.create({
    timeout: 60000,
    headers: {
        Authorization: {
            toString() {
                return `FCB ${localStorage.getItem("token")}`;
            }
        }
    }
});
export default instance;
