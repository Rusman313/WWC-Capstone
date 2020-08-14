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
    this.state = {
      name: "",
    };

    this.userChange = this.userChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  submitUser = () => {
    const user = { name: this.state.name };
    axios.post("http://localhost:8080/user/", user);
  };

  userChange = (event) => {
    this.setState({ name: event.target.value });
  };

  userList = () => {
    return this.props.history.push("names");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.submitUser();
    console.log(this.state.name);
    this.setState({ name: "" });
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
              <form onSubmit={this.handleSubmit}>
                <Grid item onReset={this.resetUser}>
                  <TextField
                    id="input-with-icon-grid"
                    label="Username"
                    value={this.state.name}
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
              </form>
            </Grid>
          </div>
        </div>
      );
    }
  }
}

export default UserComponent;
