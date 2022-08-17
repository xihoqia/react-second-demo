import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
  SmileOutlined,
  CrownOutlined,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Input, Popconfirm } from "antd";
import React, { useState } from "react";
import "./index.css";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [btn, setBtn] = useState(true);
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh" }}
      >
        <div style={{ display: "flex", width: "200px" }}>
          <div className="logo" />
          <h1 className="logo-item">Ant Design Pro</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
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
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-wrap">
           
              <div style={{ width: "200px", height: "64px",lineHeight:'64px',}}
               >
              {btn ? (
                <Button
                  type="primary"
                  shape="circle"
                  style={{marginLeft:'150px'}}
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
                style={{marginRight:'5px'}}
                onClick={() => {
                  setBtn(!btn);
                }}
                icon={<SearchOutlined />}
              />
                <Input placeholder="站内搜索" style={{marginTop:'15px',width:'150px'}} /> 
              </div> 
              )}
               </div>
        
            <span className="user-name">user.name</span>
            <span className="user-logout">
              <Popconfirm
                title="是否确认退出？"
                okText="退出"
                cancelText="取消"
              >
                <LogoutOutlined /> 退出登录
              </Popconfirm>
            </span>
          </div>
        </Header>
        <hr />
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
