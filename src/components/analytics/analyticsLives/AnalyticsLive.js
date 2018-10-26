import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SimpleLineChart from "./SimpleLineChart";
import AssistidaCard from "./AssistidaCard";
import InteracoesCard from "./InteracoesCard";
import VisualizacoesCard from "./VisualizacoesCard";
import DispositivosCard from "./DispositivosCard";



const styles = theme => ({
  toolbar: {
    paddingRight: 1
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },

  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Analytics extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return <React.Fragment>
        <CssBaseline />

        <Typography variant="h2" gutterBottom component="h1">
          Dados sobre Lives
        </Typography>
        <Typography variant="h4" gutterBottom component="h2">
          Quantidades de participantes
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <SimpleLineChart />
        </Typography>

        <Grid container spacing={16}>
          <Grid item sm={12} md={6}>            
            <AssistidaCard />
          </Grid>
          <Grid item sm={12} md={6}>            
            <VisualizacoesCard />
          </Grid>
          <Grid item sm={12} md={6}>            
            <DispositivosCard />
          </Grid>
          <Grid item sm={12} md={6}>            
            <InteracoesCard />          
          </Grid>              
        </Grid>
        
      </React.Fragment>;
  }
}

Analytics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Analytics);
