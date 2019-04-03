import React from "react";
import styled from "styled-components";

const Posttitle = styled.h3`
  color: black;
  font-size: 1.5em;
  padding: 10px 0;
`;
const Postwrapper = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  height: 150px;
  overflow: hidden;
  color: #555;
  font-size: 1.15em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 100%;
    margin-left: 0;
    height: 300px;
    font-size: 1em;
  }
`;
const Image = styled.img`
  width: 80%;
  margin-left: 10%;
  margin-top: 15px;
  height: auto;
  max-height: 80%;
  @media (max-width: 800px) {
    width: 40%;
    float: left;
    margin-left: 0;
  }
`;
const Posttext = styled.div`
  position: relative;
  height: 150px;
  overflow: hidden;
`;
const Fader = styled.div`
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 5%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100%;
  height: 170px;
`;
const Postdate = styled.p`
  font-size: 13px;
  color: gray;
  margin-bottom: 10px;
`;
const Postcontent = styled.p`
  font-size: 0.95em;
  color: black;
`;
const Post = props => {
  let image = null;
  if (props.img) {
    image = <Image src={props.img} alt="post-picture" />;
  }
  return (
    <Postwrapper>
      <figure>{image}</figure>
      <article>
        <Posttext>
          <Fader />
          <Posttitle>{props.title}</Posttitle>
          <Postdate>Added on {props.date}</Postdate>
          <Postcontent>{props.content}</Postcontent>
        </Posttext>
      </article>
    </Postwrapper>
  );
};

export default Post;
