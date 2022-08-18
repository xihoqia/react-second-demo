import { Layout,} from "antd";
import LeftMenu from "../../components/Left";
import Top from "../../components/Top";
import "./index.css";
import { Outlet } from "react-router-dom";
const {  Content } = Layout;
const App = () => {
 
  return (
    <Layout>
      <LeftMenu/>
      <Layout className="site-layout">
        <Top />
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
