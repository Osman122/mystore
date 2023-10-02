import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/products'
})

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("REQUEST CONFIG",config)
    config.headers['Authorization'] = "TOEKEEEN SENT FROM INTERCEPTOR";
    config.headers['Accept-language'] = "ar";
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
    console.log("RESPONSE", response)
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});