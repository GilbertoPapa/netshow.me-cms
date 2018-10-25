import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Select from "./Select";

const styles = {
  card: {
    minWidth: 275,
    display: "flex",
    flexDirection: "column",
    
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
  }
};
const card = [1];
function SimpleCard(props) {
  const { classes } = props;

  return <React.Fragment>    
        
        <Grid item key={card} sm={12} md={6}>
          <Typography gutterBottom variant="h6" component="h2">
            Conversão
          </Typography>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h4" component="h2">
                75%
              </Typography>
            </CardContent>
            <CardActions>
              <Select />
              <Button size="small" color="primary">
                Filtrar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      
    </React.Fragment>;
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
