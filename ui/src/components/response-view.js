import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2%;
`;

const Res = styled.pre`
  color: ${(props) => (props.isError ? "red" : "black")};
  table-layout: fixed;
  width: 100%;
`;

const ResponseView = ({ res, status, isError }) => {
  return (
    <Container>
      <h2>Response:</h2>
      {status && `Status - ${status}`}
      <Res isError={isError}>{res}</Res>
    </Container>
  );
};

export default ResponseView;
