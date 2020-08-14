import React, { Component } from "react";
import AppNav from "../components/AppNav";
import ResultsComponent from "../components/ResultsComponent";
class Results extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to results</h1>
        <ResultsComponent />
      </div>
    );
  }
}
export default Results;
