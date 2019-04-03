import React, { Component } from "react";
import axios from "axios";
import Article from "./Article/Article";
import Articlecont from "./Articlecont/Articlecont";
import Socbar from "../Socbar/Socbar";
class Detail extends Component {
  state = {
    post: {},
    showSoc: false
  };

  componentWillMount = () => {
    const _id = this.props.match.params._id;
    axios
      .get(`http://localhost:5000/posts/article/${_id}`)
      .then(res => {
        this.setState({ post: res.data });
      })
      .catch(e => {
        throw e;
      });
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = () => {
    if (window.pageYOffset > 50) {
      this.setState({ showSoc: true });
    } else {
      this.setState({ showSoc: false });
    }
  };
  render() {
    let socbar = null;
    if (this.state.showSoc) {
      socbar = <Socbar likes={this.state.post.likes} />;
    }
    return (
      <Articlecont>
        {socbar}
        <Article
          title={this.state.post.title}
          content={this.state.post.content}
          createdAt={this.state.post.createdAt}
          img={this.state.post.imgLink}
          vid={this.state.post.vidLink}
        />
      </Articlecont>
    );
  }
}

export default Detail;
