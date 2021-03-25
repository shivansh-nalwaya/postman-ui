import { Layout, Menu } from "antd";
import React from "react";

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Home</Menu.Item>
      </Menu>
    </Header>
  );
};

export default CustomHeader;
