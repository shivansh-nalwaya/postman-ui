import { Breadcrumb, Layout } from "antd";
import React from "react";
import Header from "./header";
import Sider from "./sider";

const CustomLayout = (props) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Layout.Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "white",
            }}
          >
            {props.children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
