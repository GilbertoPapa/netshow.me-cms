import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SimpleLineChart from "./SimpleLineChart";
import ReplayCard from "./ReplayCard";
import ConversaoCard from "./ConversaoCard";
import TempoMedioCard from "./TempoMedioCard";
import TopTrendingCard from "./TopTrendingCard";
import NovidadesCard from "./NovidadesCard";


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
          <Grid item container spacing={16} lg={8}>
            <ReplayCard />
            <TempoMedioCard />
            <ConversaoCard />
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
