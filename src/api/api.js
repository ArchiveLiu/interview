import request from '../untils/request'  //引入request.js实现对请求前后的拦截功能
export function signup() {
    return request({
        url: '/user/role',
        method: 'get',
    })
}