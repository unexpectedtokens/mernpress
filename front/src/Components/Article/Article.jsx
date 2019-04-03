import React from "react";
import styled from "styled-components";
import vid from "../../../media/wii.mp3";
import duck from "../../../media/duck.mp4";
const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
`;
const Added = styled.p`
  font-size: 12px;
  text-emphasis-style: italic;
  margin-bottom: 20px;
  color: gray;
`;
const Content = styled.p`
  font-size: 1.2em;
  color: #555;
  text-align: left;
  white-space: pre-line;
`;
const Banner = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 25px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Contentvid = styled.video`
  width: 80%;
  height: auto;
  margin-bottom: 25px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Music = styled.audio`
  opacity: 0;
`;
const Article = props => {
  let banner = null;
  if (props.vid) {
    return (banner = <Contentvid src={duck} autoPlay controls />);
  }
  if (props.img) {
    banner = <Banner src={props.img} />;
  }

  return (
    <div>
      <figure>{banner}</figure>
      <article>
        <Title>{props.title}</Title>
        <Music src={vid} autoPlay />
        <Added>Added on {props.createdAt}</Added>
        <Content>{props.content}</Content>
      </article>
    </div>
  );
};

export default Article;
