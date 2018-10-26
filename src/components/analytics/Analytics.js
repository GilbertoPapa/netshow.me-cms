import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SimpleLineChart from "../dashboard/SimpleLineChart";
import ReplayCard from "../dashboard/ReplayCard";
import ConversaoCard from "../dashboard/ConversaoCard";
import TempoMedioCard from "../dashboard/TempoMedioCard";
import TopTrendingCard from "../dashboard/TopTrendingCard";


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

        <Typography variant="h4" gutterBottom component="h2">
          Views
        </Typography>
        <Typography component="div" className={classes.chartContainer}>
          <SimpleLineChart />
        </Typography>
        <Grid container spacing={16}>
          <Grid item sm={12} md={6}>            
            <ReplayCard />
          </Grid>
          <Grid item sm={12} md={6}>            
            <TempoMedioCard />
          </Grid>
          <Grid item sm={12} md={6}>            
            <ConversaoCard />
          </Grid>
          <Grid item sm={12} md={6}>            
            <TopTrendingCard />          
          </Grid>      
        </Grid>
      </React.Fragment>;
  }
}

Analytics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Analytics);
