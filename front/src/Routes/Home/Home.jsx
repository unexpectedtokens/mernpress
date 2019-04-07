import React, { Component } from "react";
import Posts from "../../Components/Posts/Posts";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const Main = styled.main`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
  }
`;

class Home extends Component {
  state = {
    posts: [],
    active: true
  };

  componentWillMount() {
    axios
      .get("http://localhost:5000/posts/getposts")
      .then(res => {
        const reversed = res.data.reverse();
        this.setState({ posts: reversed });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.active}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Main>
            <Posts posts={this.state.posts} />
          </Main>
        </CSSTransition>
        <Footer />
      </div>
    );
  }
}

export default Home;
