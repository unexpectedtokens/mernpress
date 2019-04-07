import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255);
  z-index: 100000;
  position: absolute;
  @media (max-width: 800px) {
  }
`;
const Formcont = styled.div`
  padding-top: 50px;
  width: 70%;
  margin-left: 15%;
  background: url("https://cdn-images-1.medium.com/max/1800/1*Cs2lqW1GyoPdYqs1U0Xudg.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 100px;
  height: 450px;
  text-align: center;

  @media (max-width: 1100px) {
    background: #fff;
  }
  h1 {
    margin-top: 70px;
  }
`;
const Loginput = styled.input`
  width: 30%;
  margin: 30px 35% 10px;
  border: none;
  border-bottom: 1px solid #000;
  padding: 10px;
  @media (max-width: 800px) {
    width: 70%;
    margin-left: 15%;
  }
  outline: none;
  background: #fff;
`;
const Crosscont = styled.div`
  font-size: 3.5em;
  color: #5e5e5e;
  transition: color 0.3s;
  position: absolute;
  right: 10px;
  top: 10px;
  :hover {
    color: #000;
  }
`;
const Submit = styled.button`
  padding: 10px 16px;
  border: 2px solid #000;
  margin-top: 50px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    color: #fff;
    background: #000;
  }
`;
const Instead = styled.p`
  color: green;
  cursor: pointer;
  transition: 0.3s;
  margin: 30px 0;
  :hover {
    text-decoration: underline;
  }
`;

const LogRegcont = props => {
  return (
    <Container>
      <Formcont>
        <h1>Join Mernpress</h1>
        <Link to="/">
          <Crosscont>
            <IoIosClose />
          </Crosscont>
        </Link>
        <Loginput
          type="text"
          placeholder="Username"
          onChange={props.handleUser}
        />
        <Loginput type="password" onChange={props.handlePwd} />
        <Submit>Log in</Submit>
        <Instead onClick={props.checkLogReg}>
          Don't have an account yet? Register instead.
        </Instead>
      </Formcont>
    </Container>
  );
};

export default LogRegcont;
