import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2%;
`;

const ReqBodyInput = ({ reqBody, setReqBody }) => {
  return (
    <Container>
      Enter the request body:
      <Input.TextArea
        value={reqBody}
        onChange={(e) => setReqBody(e.target.value)}
      />
    </Container>
  );
};

export default ReqBodyInput;
