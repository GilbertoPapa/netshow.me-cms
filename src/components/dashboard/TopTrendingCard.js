import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import MediaControlCard from "./MediaControlCard";

const styles = {
  card: {
    minWidth: 275,
    display: "flex",
    flexDirection: "column"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },

  media: {
    height: 140
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      
        <Typography gutterBottom variant="h6" component="h2">
          Top Trending Vídeos
        </Typography>
        <Card className={classes.card}>          
            <CardContent>
              <CardActionArea>
              <MediaControlCard/>
              </CardActionArea>
              <CardActionArea>
              <MediaControlCard/>
              </CardActionArea>
              <CardActionArea>
              <MediaControlCard/>
              </CardActionArea>
            </CardContent>          
        </Card>
      
    </React.Fragment>    
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
