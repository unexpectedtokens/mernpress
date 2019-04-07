import React, { Component } from "react";
import LogCont from "../../Components/Logreg/Login";
import Regcont from "../../Components/Logreg/Register";

class Logreg extends Component {
  state = {
    LogorReg: "log"
  };
  handleUserNameInput = () => {
    console.log("helpme");
  };
  handlePwdInput = () => {
    console.log("helpme");
  };
  LogorReg = () => {
    if (this.state.LogorReg === "log") {
      this.setState({ LogorReg: "reg" });
    } else {
      this.setState({ LogorReg: "log" });
    }
  };
  render() {
    let auth = null;
    if (this.state.LogorReg === "log") {
      console.log("log");
      return (
        <LogCont
          handleUser={this.handleUserNameInput}
          handlePwd={this.handlePwdInput}
          checkLogReg={this.LogorReg}
        />
      );
    } else if (this.state.LogorReg === "reg") {
      console.log("reg");
      return (
        <Regcont
          handleUser={this.handleUserNameInput}
          handlePwd={this.handlePwdInput}
          checkLogReg={this.LogorReg}
        />
      );
    }
    return { auth };
  }
}
export default Logreg;
