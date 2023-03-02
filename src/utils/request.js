import axios from "axios";

axios.interceptors.response.use(res => {
    //成功
    return res.data;
}, err => {
    //失败
    return Promise.reject(err)
})

