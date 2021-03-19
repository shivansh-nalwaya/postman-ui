import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";

const { SubMenu } = Menu;
const { Sider } = Layout;

const CustomSider = () => {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="History">
          {/* <Menu.Item key="1">option1</Menu.Item> */}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default CustomSider;
