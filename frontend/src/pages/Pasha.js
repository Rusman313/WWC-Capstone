import React, { Component } from "react";
import AppNav from "../components/AppNav";
import PashaComponent from "../components/PashaComponent";

class Pasha extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <PashaComponent />
      </div>
    );
  }
}
export default Pasha;
