import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
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

  return (
    <Grid container spacing={40}>
      <Grid item key={card} sm={10} md={8} lg={3}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h4" component="h2">
                35%
              </Typography>
            </CardContent>
            <CardActions>
              <Select/>
              <Button size="small" color="primary">
                Filtrar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      
    </Grid>
    
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
