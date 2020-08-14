import React, { Component } from "react";
import UserService from "../services/UserService";
import { Grid, TextField, Button } from "@material-ui/core";
import { AccountCircleRounded } from "@material-ui/icons";

class UserComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircleRounded />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Username" />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" size="small">
                Take Quiz
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default UserComponent;
