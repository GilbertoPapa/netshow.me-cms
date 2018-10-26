import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  marginBottom1Rem: {
    marginBottom: "1rem"
  },

  marginBottom2Rem: {
    marginBottom: "2rem"
  },

  superBtn: {
    width: "100%",
    fontSize: "5rem",
    color: "rgba(255, 255, 255, 0.8)",
    padding: "7rem 5rem",
    opacity: 1,
    transition: "all 0.5s ease-in-out",    

    [theme.breakpoints.up("lg")]: {
      minHeight: "420px",
      opacity: 0.75,

      "&:hover": {
        opacity: 1
      }
    }
  },

  gradient1: {
    background:
      "linear-gradient(135deg, rgba(6, 186, 246, 0.9) 0%, rgba(49, 78, 111, 0.75) 100%), url('/img/live-bg.jpg') center/cover no-repeat",
    backgroundBlendMode: "normal"    
  },

  gradient2: {
    background:
      "linear-gradient(135deg, rgba(49, 78, 111, 0.9) 0%, rgba(6, 186, 246, 0.75) 100%), url('/img/upload-video-bg.jpg') center/cover no-repeat",
    backgroundBlendMode: "normal"    
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
  }
});

class Transmissao extends Component {
  render() {
    const { classes } = this.props;

    return <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={custom}>
          <Typography className={classes.marginBottom2Rem} variant="h2" component="h1" gutterBottom>
            Transmissão
          </Typography>
          <Typography className={classes.marginBottom1Rem} variant="h4" component="h2" gutterBottom>
            Selecione uma opção:
          </Typography>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <Button
                className={`${classes.superBtn} ${classes.gradient1}`}
              >
                Live
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                className={`${classes.superBtn} ${classes.gradient2}`}
              >
                Subir Vídeo
              </Button>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </React.Fragment>;
  }
}

export default withStyles(styles)(Transmissao);