import axios from "axios";
import Cookies from "js-cookie";
import store from '../store'
axios.defaults.withCredentials = true;
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000, // request timeout
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials: true
});
service.interceptors.request.use(
    config => {
        const { _setMock } = config.params || "";
        if (_setMock != undefined) {
            config.baseURL = "";
        }
        config.headers['Accept'] = 'application/json, text/javascript, */*; q=0.01'
        config.headers['Connection'] = 'keep-alive'
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        config.headers['Accept'] = 'application/json, text/javascript, */*; q=0.01'
        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// respone interceptor
service.interceptors.response.use(
    // response => response,
    response => {
        // KingMonLoading('remove')
        const body = response.data;
        if (body.statusCode === 200 || body.statusCode === undefined) {
            if (body.code != 1) {
                store.dispatch("requestError", body)
            }
            // 
            return body;
        }
    },
    error => {
        return Promise.reject(error);
    }
);
export default service