import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography edge="start" variant="h6" style={{ flexGrow: 1 }}>
              Personality Quiz
            </Typography>
            <Button color="inherit">Take Quiz</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default AppNav;
