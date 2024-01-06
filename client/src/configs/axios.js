import axios from "axios";

export const SERVER_BASE_URL = axios.create({
    baseUrl: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true
})