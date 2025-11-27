import axios from "axios";

const BASE_URL = "https://rest.coincap.io/v3";

class API {
    static get = (path) => {
        return axios.get(`${BASE_URL}${path}`);
    };
}

export default API;
