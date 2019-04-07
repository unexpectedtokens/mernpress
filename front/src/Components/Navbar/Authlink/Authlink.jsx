import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Linktoauth = styled.p`
  float: right;
  border: 1px solid green;
  padding: 8px 20px;
  margin: 6px 30px;
  color: green;
  transition: color 0.5s, border 0.5s;
  border-radius: 5px;
  :hover {
    color: darkgreen;
    border: 1px solid darkgreen;
  }
`;

const Authlink = () => {
  return (
    <Link to="/auth/">
      <Linktoauth>Login</Linktoauth>
    </Link>
  );
};

export default Authlink;
