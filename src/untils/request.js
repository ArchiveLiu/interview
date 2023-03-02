import axios from 'axios'


const service = axios.create({
    baseURL: 'https://your-api.com', // api的base_url
    timeout: 5000,
    headers: {
        Authorization : `Bearer ${localStorage.getItem('access_token')}`
     }
})

// request interceptor  请求之前的拦截器
service.interceptors.request.use(config => {
    
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone interceptor 请求之后异常状态拦截
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.statusCode) {
            return Promise.reject('error');
        } else {
            return response.data;
        }
    },
    error => {
        console.log('err' + error)// for debug
        return Promise.reject(error)
    }
)

export default service