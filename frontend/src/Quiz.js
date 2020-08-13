import React, { Component, useState } from "react";
import AppNav from "./AppNav";
import { makeStyles } from "@material-ui/core/styles";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(3),
//   },
//   button: {
//     margin: theme.spacing(1, 1, 0, 0),
//   },
// }));

// classes = useStyles();
// const [value, setValue] = React.useState("");
// const [error, setError] = React.useState(false);
// const [helperText, setHelperText] = React.useState("Choose wisely");

// const handleRadioChange = (event) => {
//   setValue(event.target.value);
//   setHelperText(" ");
//   setError(false);
// };

// const handleSubmit = (event) => {
//   event.preventDefault();

//   if (value === "best") {
//     setHelperText("You got it!");
//     setError(false);
//   } else if (value === "worst") {
//     setHelperText("Sorry, wrong answer!");
//     setError(true);
//   } else {
//     setHelperText("Please select an option.");
//     setError(true);
//   }
// };

class Quiz extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppNav />
        {/* <form onSubmit={handleSubmit}>
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <FormLabel component="legend">
              Pop quiz: Material-UI is...
            </FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="The best!"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="The worst."
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Check Answer
            </Button>
          </FormControl>
        </form> */}
      </div>
    );
  }
}
export default Quiz;
