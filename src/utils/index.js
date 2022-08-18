//先把所有的工具函数导出的模块在这里导入
//然后再统一导出

import {http} from './http'
import { getToken, setToken, clearToken }from './token';
export {
    http,
    getToken, 
    setToken, 
    clearToken
}