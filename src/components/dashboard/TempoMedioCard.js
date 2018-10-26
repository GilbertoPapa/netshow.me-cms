import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Select from "./Select";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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

const custom = createMuiTheme({
  palette: {
    primary: {
      main: "#06baf6"
    },
    secondary: {
      main: "#314E6F"
    }
  }
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <MuiThemeProvider theme={custom}>      
      
        <Typography gutterBottom variant="h6" component="h2">
          Tempo Médio de Exibição (Minutos)
        </Typography>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>

            <Typography gutterBottom variant="h4" component="h2">
              32
            </Typography>
          </CardContent>
          <CardActions>
            <Select/>
            <Button size="small" color="primary">
              Filtrar
            </Button>
          </CardActions>
        </Card>      

      </MuiThemeProvider>    
    </React.Fragment>    
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
