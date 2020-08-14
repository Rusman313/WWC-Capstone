import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import axios from "axios";
import { Grid, TextField, Button } from "@material-ui/core";
import { AccountCircleRounded } from "@material-ui/icons";

class UserComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state.show = false;
    this.userChange = this.userChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  initialState = { name: "" };

  resetUser = () => {
    this.setState(() => this.initialState);
  };

  submitUser = (event) => {
    event.preventDefault();
    const user = { name: this.state.name };
    axios.post("http://localhost:8080/user/", user);
    this.setState(this.initialState);
  };

  userChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  userList = () => {
    return this.props.history.push("names");
  };

  render() {
    {
      const { name } = this.state;

      return (
        <div>
          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircleRounded />
              </Grid>
              <Grid item onReset={this.resetUser} onSubmit={this.submitUser}>
                <TextField
                  id="input-with-icon-grid"
                  label="Username"
                  value={name}
                  onChange={this.userChange}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={this.handleSubmit}
                  component={Link}
                  to="/quiz"
                >
                  Take Quiz
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      );
    }
  }
}

export default UserComponent;
