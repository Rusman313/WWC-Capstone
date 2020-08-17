import React, { Component } from "react";
import QuizService from "../services/QuizService";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
      dataArray: [],
    };
  }
  componentDidMount() {
    QuizService.getQuiz().then((response) => {
      this.setState({ quiz: response.data });
    });
  }
  handleChange = (event) => {
    let data = event.target.value.charAt(0);
    this.state.dataArray.push(data);
    console.log(this.state.dataArray);
  };
  calculate = () => {
    let aScore = 0;
    let bScore = 0;
    let cScore = 0;
    let dScore = 0;
    let eScore = 0;
    for (let i = 0; i < this.state.dataArray.length; i++) {
      if (this.state.dataArray[i] === "A") {
        aScore++;
      }
      if (this.state.dataArray[i] === "B") {
        bScore++;
      }
      if (this.state.dataArray[i] === "C") {
        cScore++;
      }
      if (this.state.dataArray[i] === "D") {
        dScore++;
      }
      if (this.state.dataArray[i] === "E") {
        eScore++;
      }
    }
    if (
      aScore > bScore &&
      aScore > cScore &&
      aScore > dScore &&
      aScore > eScore
    ) {
      document.location.href = "zach";
    }
    if (
      bScore > aScore &&
      bScore > cScore &&
      bScore > dScore &&
      bScore > eScore
    ) {
      document.location.href = "lionel";
    }
    if (
      cScore > aScore &&
      cScore > bScore &&
      cScore > dScore &&
      cScore > eScore
    ) {
      document.location.href = "george";
    }
    if (
      dScore > aScore &&
      dScore > bScore &&
      dScore > cScore &&
      dScore > eScore
    ) {
      document.location.href = "kaley";
    }
    if (
      eScore > aScore &&
      eScore > bScore &&
      eScore > cScore &&
      eScore > dScore
    ) {
      document.location.href = "pasha";
    }
    console.log(Math.max(aScore, bScore, cScore, dScore, eScore));
  };
  render() {
    return (
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <h1>Questions List</h1>
          <div>
            {this.state.quiz.map((question) => (
              <div style={{ width: 420 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <Typography variant="h6" color="primary">
                      {question.question}
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-label="answer"
                    name="answer"
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value={question.answer1}
                      control={<Radio />}
                      label={question.answer1}
                    />
                    <FormControlLabel
                      value={question.answer2}
                      control={<Radio />}
                      label={question.answer2}
                    />
                    <FormControlLabel
                      value={question.answer3}
                      control={<Radio />}
                      label={question.answer3}
                    />
                    <FormControlLabel
                      value={question.answer4}
                      control={<Radio />}
                      label={question.answer4}
                    />
                    <FormControlLabel
                      value={question.answer5}
                      control={<Radio />}
                      label={question.answer5}
                    />
                  </RadioGroup>
                </FormControl>
                <br />
                <br />
              </div>
            ))}
            <Button
              variant="contained"
              color="primary"
              onClick={this.calculate}
            >
              Submit
            </Button>
            <br />
            <br />
          </div>
        </Grid>
      </div>
    );
  }
}
export default QuizComponent;
