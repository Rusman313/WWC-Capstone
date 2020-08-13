import React, { Component } from "react";
import QuizService from "../services/QuizService";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  Button,
  makeStyles,
} from "@material-ui/core";

class QuizComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
    };
  }

  componentDidMount() {
    QuizService.getQuiz().then((response) => {
      this.setState({ quiz: response.data });
    });
  }

  render() {
    console.log(this.state.quiz);
    return (
      <div>
        <h1>Questions List</h1>

        <div>
          {this.state.quiz.map((question) => (
            <div style={{ flexGrow: 1 }}>
              <FormControl component="fieldset">
                <FormLabel variant="h6" component="legend">
                  {question.question}
                </FormLabel>
                <RadioGroup
                  aria-label="answer"
                  name="answer"
                  //   value={value}
                  //   onChange={handleChange}
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default QuizComponent;
