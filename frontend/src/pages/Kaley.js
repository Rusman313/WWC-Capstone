import React, { Component } from "react";
import AppNav from "../components/AppNav";
import KaleyComponent from "../components/KaleyComponent";

class Kaley extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <KaleyComponent />
      </div>
    );
  }
}
export default Kaley;
