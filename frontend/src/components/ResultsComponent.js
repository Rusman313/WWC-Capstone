import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const useStyles = () => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

class ResultsComponent extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* kaley */}
        <div className="kaley">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
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
        {/* zach */}
        <div className="Zach">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/zach.png")}
                title="Zach"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Zach!
                </Typography>
                <Typography>blurb</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        {/* Pasha */}
        <div className="Pasha">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/pasha.png")}
                title="Pasha"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Pasha!
                </Typography>
                <Typography>blurb</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        {/* George */}
        <div className="George">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/george.png")}
                title="George"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like George!
                </Typography>
                <Typography>blurb</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        {/* Lionel */}
        <div className="Lionel">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                component="img"
                height="300"
                image={require("../images/lionel.png")}
                title="Lionel"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component="h2">
                  You're like Lionel!
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

export default withStyles(useStyles)(ResultsComponent);
