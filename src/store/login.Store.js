//login 模块
import { makeAutoObservable } from "mobx"
import { http,setToken,getToken,clearToken} from '../utils'
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
        //存入到localStorage
        setToken(this.token)
    }
   LoginOut=()=>{
    this.token = ''
    clearToken()
   }
  
}
export default LoginStore