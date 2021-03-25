import { Button, Input, Select } from "antd";
import React, { useContext } from "react";
import PostmanContext from "../contexts/postman-context";

const { Option } = Select;

const URLInput = () => {
  const { url, setUrl, method, changeMethod, loading, onHit } = useContext(
    PostmanContext
  );
  return (
    <Input
      size="large"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      addonBefore={
        <Select value={method} onChange={changeMethod}>
          <Option value="GET">GET</Option>
          <Option value="POST">POST</Option>
          <Option value="PUT">PUT</Option>
          <Option value="DELETE">DELETE</Option>
        </Select>
      }
      addonAfter={
        <Button onClick={onHit} loading={loading}>
          Go!
        </Button>
      }
      placeholder="Enter the URL"
    />
  );
};

export default URLInput;
