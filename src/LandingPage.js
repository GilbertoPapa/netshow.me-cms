import React, { Component } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const styles = theme => ({
  banner: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: custom.palette.secondary.main,
    backgroundImage:
      "url('https://static.netshow.me/production/assets/transmission-parallax-8a4e11227d53fb2a6933c1878299ee6c9fb5a1624de75718fddb5fa490e736e4.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundBlendMode: "soft-light",
    color: "#fff",
    width: "100%",
    padding: "2rem 10% 8rem",

    [theme.breakpoints.down("sm")]: {
      backgroundColor: custom.palette.secondary.dark,
      padding: "2rem 10%"
    }
  },

  fullWidth: {
    width: "100%"
  },

  whiteText: {
    color: "#fff"
  },

  headline: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem"
    }
  },

  subheadline: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem"
    }
  },

  bannerLine: {
    margin: "0 0 0.5rem"
  },

  logo: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "24px",
    marginBottom: "1rem",

    [theme.breakpoints.down("sm")]: {
      maxHeight: "32px"
    }
  },

  container: {
    maxWidth: "960px",
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem"
    }
  },

  about: {
    padding: "3rem 0"
  },

  presenters: {
    backgroundColor: custom.palette.primary.main,
    padding: "3rem 0"
  },

  presentersCards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: "2rem"
  },

  card: {
    maxWidth: 400,

    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
      maxWidth: 300,
    }
  },

  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
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

class LandingPage extends Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.landingPage}>
        <CssBaseline />

        <main className={classes.main}>
          <MuiThemeProvider theme={custom}>
            <section className={classes.banner}>
              <img className={classes.logo} src="img/logo.png" alt="Logo" />
              <Typography variant="body1" className={`${classes.fullWidth} ${classes.whiteText}`}>
                31 de Outubro de 2018
              </Typography>
              <Typography variant="body1" className={`${classes.fullWidth} ${classes.whiteText}`} gutterBottom>
                22:00 | 10:00 PM
              </Typography>

              <Typography variant="h1" className={`${classes.fullWidth} ${classes.whiteText} ${classes.headline}`} gutterBottom>
                Mussum Ipsum, cacilds vidis litro abertis.
              </Typography>
              <Button variant="contained" size="large" color="primary">
                Se cadastre para ter acesso a Live
              </Button>
            </section>
            <section className={classes.about}>
              <div className={classes.container}>
                <Typography variant="h2" className={classes.subheadline} gutterBottom>
                  Sobre a Live
                </Typography>
                <Typography variant="body1" paragraph>
                  Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Mé faiz elementum girarzis, nisi eros vermeio. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Diuretics paradis num copo é motivis de denguis.
                </Typography>
                <Typography variant="body1">
                  Sapien in monti palavris qui num significa nadis i pareci
                  latim. Mais vale um bebadis conhecidiss, que um alcoolatra
                  anonimis. Delegadis gente finis, bibendum egestas augue
                  arcu ut est. Cevadis im ampola pa arma uma pindureta.
                </Typography>
              </div>
            </section>
          </MuiThemeProvider>

          <section className={classes.presenters}>
            <MuiThemeProvider theme={custom}>
              <div className={classes.container}>
                <Typography variant="h2" className={classes.subheadline} gutterBottom>
                  Conheça os partipantes
                </Typography>
                <div className={classes.presentersCards}>
                  <Card className={classes.card}>
                    <CardMedia component="img" alt="Darth Vader" className={classes.media} height="180" image="/img/darth-vader.jpg" title="Darth Vader" />
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        Darth Vader
                      </Typography>
                      <Typography gutterBottom variant="overline">
                        Death Star CEO
                      </Typography>
                      <Typography component="p">
                        Mussum Ipsum, cacilds vidis litro abertis. Praesent
                        vel viverra nisi. Mauris aliquet nunc non turpis
                        scelerisque, eget. In elementis mé pra quem é
                        amistosis quis leo. Em pé sem cair, deitado sem
                        dormir, sentado sem cochilar e fazendo pose. Mais
                        vale um bebadis conhecidiss, que um alcoolatra
                        anonimis.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="secondary" component="a" href="https://www.linkedin.com" target="_blank">
                        LinkedIn
                      </Button>
                    </CardActions>
                  </Card>

                  <Card className={classes.card}>
                    <CardMedia component="img" alt="Kylo Ren" className={classes.media} height="180" image="/img/kylo-ren.jpg" title="Kylo Ren" />
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        Kylo Ren
                      </Typography>
                      <Typography gutterBottom variant="overline">
                        First Order CEO
                      </Typography>
                      <Typography component="p">
                        Mussum Ipsum, cacilds vidis litro abertis. Praesent
                        vel viverra nisi. Mauris aliquet nunc non turpis
                        scelerisque, eget. In elementis mé pra quem é
                        amistosis quis leo. Em pé sem cair, deitado sem
                        dormir, sentado sem cochilar e fazendo pose. Mais
                        vale um bebadis conhecidiss, que um alcoolatra
                        anonimis.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="secondary" component="a" href="https://www.linkedin.com" target="_blank">
                        LinkedIn
                      </Button>
                    </CardActions>
                  </Card>
                </div>
                <Typography align="center">
                  <Button variant="contained" size="large" color="secondary">
                    Join us
                  </Button>
                </Typography>
              </div>
            </MuiThemeProvider>
          </section>
        </main>
      </div>;
  }
}

export default withStyles(styles)(LandingPage);
