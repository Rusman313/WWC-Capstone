import React, { Component } from "react";
import AppNav from "../components/AppNav";
import LionelComponent from "../components/LionelComponent";

class Lionel extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <LionelComponent />
      </div>
    );
  }
}
export default Lionel;
