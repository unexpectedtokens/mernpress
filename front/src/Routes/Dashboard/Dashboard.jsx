import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Dashboardwrapper = styled.div`
  width: 80%;
  margin-left: 10%;
  height: 80vh;
  margin-top: 20vh;
  background-color: white;
  border: 1px solid lightcyan;
`;
const Admininput = styled.input`
  width: 60%;
  margin-left: 20%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;
const Admintarea = styled.textarea`
  outline: none;
  width: 60%;
  margin-left: 20%;
  padding: 30px 10px 100px 10px;
  border: none;
  border-bottom: 1px solid black;
  resize: none;
`;
const Addbutton = styled.button`
  padding: 10px 16px;
  background: #fff;
  color: #000;
  border: 2px solid #000;
  transition: 0.3s;
  :hover {
    color: #fff;
    background: #000;
  }
`;
class Dashboard extends Component {
  state = {};

  handleImgchange = e => {
    this.setState({ imgLink: e.target.value });
  };
  handleTitlechange = e => {
    this.setState({ title: e.target.value });
  };
  handleContentchange = e => {
    this.setState({ content: e.target.value });
  };
  addArticle = e => {
    axios
      .post("http://localhost:5000/posts/addpost", {
        title: this.state.title,
        content: this.state.content,
        imgLink: this.state.imgLink
      })
      .then(doc => console.log(doc))
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <Dashboardwrapper>
        <Admininput
          placeholder="Link to image"
          onChange={this.handleImgchange}
        />
        <Admininput placeholder="Title" onChange={this.handleTitlechange} />
        <Admintarea placeholder="Content" onChange={this.handleContentchange} />
        <Addbutton onClick={this.addArticle}>click me</Addbutton>
      </Dashboardwrapper>
    );
  }
}
export default Dashboard;
