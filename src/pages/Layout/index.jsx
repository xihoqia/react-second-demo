import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
  SmileOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import { Layout, Menu,} from "antd";
import React, { useState } from "react";
import "./index.css";

import { useNavigate, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh" }}
      >
        <div style={{display:'flex' ,width:'200px'}}><div className="logo"/><h1 className="logo-item">Ant Design Pro</h1></div>
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
        <Header className="site-layout-background" style={{padding:0}}>
          <div className="header-wrap">
    
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
