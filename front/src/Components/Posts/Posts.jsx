import React, { Component } from "react";
import Post from "./Post/Post";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Homecont = styled.div`
  width: 70%;
  @media (max-width: 800px) {
    width: 85%;
    margin-left: 7.5%;
  }
`;
class Posts extends Component {
  state = {};

  render() {
    return (
      <Homecont>
        {this.props.posts.map(post => {
          return (
            <Link to={`/article/${post._id}`} key={post._id}>
              <Post
                title={post.title}
                content={post.content}
                date={post.createdAt}
                key={post._id}
                img={post.imgLink}
              />
            </Link>
          );
        })}
      </Homecont>
    );
  }
}

export default Posts;
