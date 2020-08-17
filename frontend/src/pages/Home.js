import React, { Component } from "react";
import AppNav from "../components/AppNav";
import UserComponent from "../components/UserComponent";
import { Grid } from "@material-ui/core";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppNav />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <h1>Welcome to personality Quiz</h1>
          <UserComponent />
        </Grid>
      </div>
    );
  }
}
export default Home;
