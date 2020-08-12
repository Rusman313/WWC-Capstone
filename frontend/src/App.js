import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Quiz from "./Quiz";
import Home from "./Home";
import Results from "./Results";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/quiz" exact={true} component={Quiz} />
          <Route path="/results" exact={true} component={Results} />
        </Switch>
      </Router>
    );
  }
}
export default App;
