import React, { Component } from "react";
import AppNav from "../components/AppNav";
import UserComponent from "../components/UserComponent";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <h1>Welcome to personality Quiz</h1>
        <UserComponent />
      </div>
    );
  }
}
export default Home;
