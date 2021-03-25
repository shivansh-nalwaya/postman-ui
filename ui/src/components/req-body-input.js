import React, { useContext } from "react";
import { Input } from "antd";
import styled from "styled-components";
import PostmanContext from "../contexts/postman-context";

const Container = styled.div`
  margin-top: 2%;
`;

const ReqBodyInput = () => {
  const { reqBody, setReqBody } = useContext(PostmanContext);
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
