import React,{useState,useEffect}from 'react'
import {
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import  {useNavigate} from 'react-router-dom' 
import {useStore} from '../../store';
import { observer } from 'mobx-react-lite'
import {Layout,Button, Input, Popconfirm } from "antd";


const { Header,} = Layout;


 function Top() {
  const [btn, setBtn] = useState(true);
  const { userStore,loginStore} = useStore()
 
  useEffect(() => {
    try {
      userStore.getUserInfo()
    } catch { }
  }, [userStore])

  const navigate=useNavigate()
  const onLogout=()=>{
    loginStore.LoginOut()
    navigate('/login')
  }
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-wrap">
            <div style={{ width: "200px", height: "64px", lineHeight: "64px" }}>
              {btn ? (
                <Button
                  type="primary"
                  shape="circle"
                  style={{ marginLeft: "150px" }}
                  onClick={() => {
                    setBtn(!btn);
                  }}
                  icon={<SearchOutlined />}
                />
              ) : (
                <div>
                  <Button
                    type="primary"
                    shape="circle"
                    style={{ marginRight: "5px" }}
                    onClick={() => {
                      setBtn(!btn);
                    }}
                    icon={<SearchOutlined />}
                  />
                  <Input
                    placeholder="站内搜索"
                    style={{ marginTop: "15px", width: "150px" }}
                  />
                </div>
              )}
            </div>

            <span className="user-name">{userStore.userInfo.name}</span>
            <span className="user-logout">
              <Popconfirm
                title="是否确认退出？"
                okText="退出"
                cancelText="取消"
                onConfirm={onLogout}
              >
                <LogoutOutlined /> 退出登录
              </Popconfirm>
            </span>
          </div>
        </Header>
  )
}

export default observer(Top)