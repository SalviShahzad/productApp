import axios from 'axios';

import { PRODUCT_URL } from '@utils/constants';

const defaultHeader = {
    headers: {
        'content-type': 'application/json',
    },
};

const instance = axios.create({
    baseURL: PRODUCT_URL,
    timeout: 120000, // 2 minutes timeout
})

// For requests
instance.interceptors.request.use(
    (req) => {
        // We can add additional configrations here
        return req;
    },
    (err) => {
        return Promise.reject(err)
    }
)

// For response
instance.interceptors.response.use(
    (res) => {
        // We can add additional configrations here
        return res;
    },
    (err) => {
        return Promise.reject(err)
    }
)

export const getRequest = ({ API = '', HEADER = {} }) => {
    return new Promise((resolve, reject) => {
        instance
            .get(API, { headers: { ...defaultHeader.headers, ...HEADER } })
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default instance;