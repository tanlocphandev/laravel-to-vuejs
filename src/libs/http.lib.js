import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASEURL_API;

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
});

http.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;
