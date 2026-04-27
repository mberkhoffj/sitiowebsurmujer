import axios from "axios";

axios.defaults.baseURL = "https://mindicador.cl"

const instance = axios.create({
    timeout: 60000
});
export default instance;