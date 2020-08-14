import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import { Grid, TextField, Button } from "@material-ui/core";
import { AccountCircleRounded } from "@material-ui/icons";

class UserComponent extends Component {
  state = {};

  //   constructor(props) {
  //     super(props);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   };

  //   handleSubmit(e) {
  //     e.preventDefault();
  //     const newUser = [];
  //     this.props.attributes.forEach(attribute => {
  //         newUser[attribute] =
  //         ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
  //     });
  //     this.props.onCreate(newUser);

  //     // clear out the dialog's input
  //     this.props.attributes.forEach(attribute => {
  //         ReactDOM.findDOMNode(this.refs[attribute]).value = '';
  //     });

  //     // navigate away from the dialog to hide it
  //     window.location = '#';
  //     }
  //   };

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

export default UserComponent;
