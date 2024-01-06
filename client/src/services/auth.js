import axios from "axios";
import { SERVER_BASE_URL } from "../configs/axios";

export const loginApi = ({userID, password}) => {
    const body = JSON.stringify({userID, password});
    return SERVER_BASE_URL.post('api/login', body, {
        headers: {
            "content-type":"application/json",
        },
    })
}

export const registerApi = ({userID, password}) => {
    const body = JSON.stringify({userID, password});
    return SERVER_BASE_URL.post('api/regsiter', body, {
        headers: {
            "content-type":"application/json",
        },
    })
}

export const renewTokenApi = () => {
    return SERVER_BASE_URL.get('api/renewToken',  {
        headers: {
            "content-type":"application/json",
        },
    })
}

export const logoutApi = () => {
    return SERVER_BASE_URL.get('api/logout', {
        headers: {
            "content-type":"application/json",
        },
    })
}

export const testApi = () => {
    return axios.get('api/test', {
         headers: {
            "content-type":"application/json",
        }
    })
    // return SERVER_BASE_URL.get('api/test', {
    //     headers: {
    //         "content-type":"application/json",
    //     },
    // })
}