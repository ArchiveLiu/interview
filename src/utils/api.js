import axios from "@/utils/request";

/**
 * 获取 banner 数据
 * @returns 
 */
export async function getBanner() {
    return await axios.get('/banner');
}


export async function getMenuQuery(params) {
    return await axios.get('/menu/query', { params });
}