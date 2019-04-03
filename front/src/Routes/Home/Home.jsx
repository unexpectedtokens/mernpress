import React, { Component } from "react";
import Posts from "./Posts/Posts";
import axios from "axios";

class Home extends Component {
  state = {
    posts: []
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
      <main>
        <Posts posts={this.state.posts} />
      </main>
    );
  }
}

export default Home;
