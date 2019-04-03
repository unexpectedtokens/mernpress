import React from "react";
import styled from "styled-components";
import { IoLogoTwitter, IoLogoFacebook, IoMdThumbsUp } from "react-icons/io";

const Socbarcont = styled.ul`
  width: 50px;
  position: fixed;
  height: 100px;
  background: white;
  left: 3%;
  @media (max-width: 800px) {
    display: none;
  }
`;
const Sociallink = styled.li`
  p {
    font-size: 0.4em;
    color: #555;
  }
  list-style: none;
  color: #555;
  transition: color 0.5s;
  font-size: 2em;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
    color: ${props => {
      if (props.twitter) {
        return "#1da1f2";
      }
      if (props.facebook) {
        return "#3b5998";
      }
      if (props.like) {
        return "#FF4500";
      }
    }};
  }
`;

const Socbar = props => {
  return (
    <Socbarcont>
      <Sociallink like>
        <p>{props.likes}</p>
        <IoMdThumbsUp />
      </Sociallink>
      <Sociallink twitter>
        <IoLogoTwitter />
      </Sociallink>
      <Sociallink facebook>
        <IoLogoFacebook />
      </Sociallink>
    </Socbarcont>
  );
};
export default Socbar;
