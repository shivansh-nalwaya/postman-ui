import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Tag } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import PostmanContext from "../../contexts/postman-context";

const { SubMenu } = Menu;
const { Sider } = Layout;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4% 2%;
  background: white;
  cursor: pointer;

  &:hover {
    background: #bababa;
  }
`;

const CustomSider = () => {
  const historyData = useContext(PostmanContext);
  const { history, setHistoryItem } = historyData;
  return (
    <Sider width={200} style={{ overflowX: "hidden" }}>
      <Menu
        mode="inline"
        defaultOpenKeys={["history"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="history" icon={<UserOutlined />} title="History">
          {history.map((histItem, index) => (
            <MenuItem
              key={`hist-item-${index}`}
              onClick={() => setHistoryItem(histItem)}
            >
              <div>
                <Tag color="green">{histItem["method"]}</Tag>
              </div>
              {histItem["url"]}
            </MenuItem>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default CustomSider;
