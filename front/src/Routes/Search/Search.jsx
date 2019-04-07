import React, { Component } from "react";
import {
  Searchbar,
  Searchcont,
  Errormessage
} from "../../Components/Searchcomponents/Searchbar";
import axios from "axios";
import Posts from "../../Components/Posts/Posts";
import Footer from "../../Components/Footer/Footer";

export default class Search extends Component {
  state = {
    toBeSearched: "",
    posts: [],
    showError: false
  };

  componentDidMount() {
    const checkKeyPressed = e => {
      if (e.keyCode === 13 && this.state.toBeSearched !== "") {
        this.Search();
      }
    };
    window.addEventListener("keydown", checkKeyPressed, false);
  }

  componentWillUnmount() {
    const checkKeyPressed = e => {
      if (e.keyCode) {
        this.Search();
      }
    };
    window.removeEventListener("keydown", checkKeyPressed, false);
  }

  Search = () => {
    axios
      .get(`http://localhost:5000/posts/search/${this.state.toBeSearched}`)
      .then(res => {
        if (res.data.length === 0) {
          return this.setState({ showError: true, posts: [] });
        }
        this.setState({ posts: res.data, showError: false });
      })
      .catch(e => {
        throw e;
      });
  };

  handleSearch = e => {
    this.setState({ toBeSearched: e.target.value });
    if (this.state.toBeSearched === "") {
      this.setState({ showError: false });
    }
  };

  render() {
    let error = null;
    const errorString = `No articles found with title "${
      this.state.toBeSearched
    }"`;
    if (this.state.showError) {
      error = <Errormessage>{errorString}</Errormessage>;
    }
    return (
      <div>
        <Searchcont>
          <Searchbar
            type="text"
            placeholder="Search Mernpress"
            onChange={this.handleSearch}
          />
          {error}
        </Searchcont>
        <Posts posts={this.state.posts} />
        <Footer />
      </div>
    );
  }
}
