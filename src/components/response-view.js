import React, { useContext } from "react";
import styled from "styled-components";
import PostmanContext from "../contexts/postman-context";

const Container = styled.div`
  margin-top: 2%;
`;

const Res = styled.pre`
  color: ${(props) => (props.isError ? "red" : "black")};
  table-layout: fixed;
  width: 100%;
`;

const ResponseView = () => {
  const { res, status, isError } = useContext(PostmanContext);
  return (
    <Container>
      <h2>Response:</h2>
      {status && `Status - ${status}`}
      <Res isError={isError}>{res}</Res>
    </Container>
  );
};

export default ResponseView;
