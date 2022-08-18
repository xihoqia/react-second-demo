import React from 'react'
import { Button ,Card,Form, Input,Checkbox,message} from 'antd'
import{useNavigate} from 'react-router-dom'

import { useStore } from '../../store'
export default function Login() {
    const navigate =useNavigate() 
    const {loginStore}=useStore()
    const onFinish = async values => {
      //  if (values.mobile==='18342217943') {
      //   navigate('/layout')
      //  }
      //navigate('/layout/welcome')
      try {await loginStore.getToken({
        mobile:values.mobile,
        code:values.code})
        navigate('/layout')
        message.success('登陆成功')
    }catch(e){
        message.error(e.response?.data?.message || '登录失败')
    }
      
      }
  return (
    <div className="login">
      <Card className="login-container">
        <Form  
        onFinish={ onFinish }
        validateTrigger={['onBlur', 'onChange']} 
        initialValues={{remember:true,mobile: '13811111111',code: '246810'}}
        >
      <Form.Item
       name="mobile"
       rules={[
         {
           pattern: /^1[3-9]\d{9}$/,
           message: '手机号码格式不对',
           validateTrigger: 'onBlur'
         },
         { required: true, message: '请输入手机号' }
       ]}
      >
        <Input size="large" placeholder="请输入手机号" />
      </Form.Item> 
      <Form.Item 
       name="code"
       rules={[
         { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
         { required: true, message: '请输入验证码' }
       ]}
      >
        <Input size="large" placeholder="请输入验证码" maxLength={6} />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" >
        <Checkbox className="login-checkbox-label">
          我已阅读并同意「用户协议」和「隐私条款」
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block >
          登录
        </Button>
      </Form.Item>
    </Form>
      </Card>
    </div>
  )
}
