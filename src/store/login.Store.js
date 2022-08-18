//login 模块
import { makeAutoObservable } from "mobx"
import { http,setToken,getToken } from '../utils'
class LoginStore{
    token=getToken() || ''
    constructor(){
        makeAutoObservable(this)
    }
    getToken= async ({mobile,code})=>{
        //调用登录接口
    const res=await http.post('http://geek.itheima.net/v1_0/authorizations',{mobile,
      code})
        //存入token
        this.token = res.data.token
        //
        setToken(this.token)
    }
}
export default LoginStore