import {
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Button, Input, Popconfirm } from "antd";
import React, { useState } from "react";
import LeftMenu from "../../components/Left";
import "./index.css";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;
const App = () => {
  const [btn, setBtn] = useState(true);
  return (
    <Layout>
      <LeftMenu/>
    
      <Layout className="site-layout">
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
