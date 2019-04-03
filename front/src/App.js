import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home/Home";
import Detail from "./Routes/Detail/Detail";
import Search from "./Routes/Search/Search";
import Footer from "./Routes/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <GlobalStyles />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/article/:_id" component={Detail} />
            <Route path="/search/" component={Search} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
    margin-top: 100px;
    font-size: 16px;
  }
  a{text-decoration: none;}
  @media (max-width: 800px){
    body{
      font-size: 14.5px;
      margin-top: 50px;
    }
  }
`;

export default App;
