import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  footer: {

  }
});

const custom = createMuiTheme({
  palette: {
    primary: {
      main: "#06baf6"
    },
    secondary: {
      main: "#314E6F"
    }
  },
  typography: {
    useNextVariants: true
  }
});
class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={custom}>
        <CssBaseline />
        <footer className={classes.footer}>
          <Typography variant="h5">Netshow.me</Typography>      
      
        </footer>;
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Footer);