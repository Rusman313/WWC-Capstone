import React, { Component } from "react";
import AppNav from "../components/AppNav";
import GeorgeComponent from "../components/GeorgeComponent";
class George extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <GeorgeComponent />
      </div>
    );
  }
}
export default George;
