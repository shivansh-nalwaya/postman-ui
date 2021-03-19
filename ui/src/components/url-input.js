import { Button, Input, Select } from "antd";
import React from "react";

const { Option } = Select;

const URLInput = ({ url, setUrl, method, setMethod, loading, onHit }) => {
  return (
    <Input
      size="large"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      addonBefore={
        <Select value={method} onChange={setMethod}>
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
