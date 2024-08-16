import { Link, Outlet } from "react-router-dom";
import { Col, Layout } from "antd";
import { StyleRow } from "./styled.jsx";
import { Content, Footer, Header } from "antd/es/layout/layout.js";

const AuthenticationLayout = () => {
  const headerStyle = {
    textAlign: "center",
    color: "black",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "white"
  };

  const layoutStyle = {
    overflow: "hidden",
    width: "100%",
    height: '100dvh'
  };

  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9"
  };

  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff"
  };

  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <span>Logo</span>
          <span>Login</span>
        </Header>
        <Content style={contentStyle}>
          <StyleRow>
            <Col span={12}></Col>

            <Col span={12}>
              <Outlet />
              <li><Link to="/">Login</Link></li>
              <li><Link to="/forgot-password">Forgot Password</Link></li>
              <li><Link to="/notfound">Not Found</Link></li>
            </Col>
          </StyleRow>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </>
  );
};

export default AuthenticationLayout;
