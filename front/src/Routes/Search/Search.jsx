import React, { Component } from "react";
import { Searchbar, Searchcont } from "./Searchcomponents/Searchbar";
import axios from "axios";
import posts from "../Components/Posts/Posts";
import post from "../Components/Posts/Post/Post";

export default class Search extends Component {
  state = {
    toBeSearced: "",
    posts: []
  };
  componentDidMount() {
    const checkKeyPressed = e => {
      if (e.keyCode === 13) {
        this.Search();
      }
    };
    window.addEventListener("keydown", checkKeyPressed, false);
  }
  Search = () => {
    axios
      .get(`http://localhost:5000/posts/search/${this.state.toBeSearced}`)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        throw e;
      });
  };
  handleSearch = e => {
    this.setState({ toBeSearced: e.target.value });
  };
  render() {
    let posts = null;
    if (this.state.posts.lenght > 0) {
      // posts = <Posts posts={} />;
    }

    return (
      <Searchcont>
        <Searchbar
          type="text"
          placeholder="Search"
          onChange={this.handleSearch}
        />
        {posts}
      </Searchcont>
    );
  }
}
