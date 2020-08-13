import React, { Component } from "react";
import QuizService from "../services/QuizService";

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
        <table>
          <thead>
            <tr>
              <td>Quiz ID</td>
              <td>Quiz Question</td>
            </tr>
          </thead>
          <tbody>
            {this.state.quiz.map((question) => (
              <tr key={question.id}>
                <td>{question.question}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuizComponent;
