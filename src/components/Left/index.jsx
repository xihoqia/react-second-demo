import React,{useState} from 'react'
import { MenuFoldOutlined,MenuUnfoldOutlined,TableOutlined,SmileOutlined,CrownOutlined,} from "@ant-design/icons";

import {Layout,Menu} from "antd";
import { useNavigate,useLocation} from "react-router-dom";

const {Sider } = Layout;

export default function LeftMenu() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location=useLocation()
  
  return (
    <Sider
    trigger={null}
    collapsible
    collapsed={collapsed}
    style={{
      
      height: '100vh',
      
    }}
  >
    <div style={{ display: "flex", width: "200px" }}>
      <div className="logo" />
      <h1 className="logo-item">Ant Design Pro</h1>
    
    </div>
    {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => {
                setCollapsed(!collapsed)},
          }
        )}
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[location.pathname.split('/')[2]]}
      onClick={(e) => {
        navigate(e.key);
      }}
      items={[
        {
          key: "welcome",
          icon: <SmileOutlined />,
          label: "欢迎",
        },
        {
          key: "User",
          icon: <CrownOutlined />,
          label: "管理页",
          children: [{ key: "admin", label: "二级管理页" }],
        },
        {
          key: "list",
          icon: <TableOutlined />,
          label: "查询表格",
        },
      ]}
    />
   
  </Sider>
  )
}
