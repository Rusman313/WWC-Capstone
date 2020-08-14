import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

class ResultsComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="kaley">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={require("../images/kaley.png")}
                title="kaley"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Kaley!
                </Typography>
                <Typography>blurb</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    );
  }
}

export default ResultsComponent;
