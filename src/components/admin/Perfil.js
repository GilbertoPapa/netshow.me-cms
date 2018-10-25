import React, { Component } from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const styles = theme => ({
  avatar: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "1rem",

    [theme.breakpoints.up("xl")]: {
      width: 300,
      height: 300      
    }    
  },

  btnMargin: {
    margin: "1rem",

    "&:last-child": {
      marginRight: 0
    }
  },

  someSpace: {
    padding: "1rem 0 4rem"
  },
  
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

class Perfil extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={custom}>
          <Typography variant="h2" component="h1" gutterBottom>
            Perfil
          </Typography>
          <Grid container spacing={16}>
            <Grid item container sm={3}>
              <Grid item container xs={12} justify="center">
                <Avatar alt="Avatar" src="https://via.placeholder.com/300.jpg/06baf6/fff" className={classes.avatar} />
              </Grid>
              <Grid item container xs={12} justify="center">
                <Button variant="contained" color="primary">
                  Carregar foto
                </Button>
              </Grid>
            </Grid>
            <Grid item sm={9}>
              <form className={classes.container} noValidate autoComplete="off">
                <Grid container className={classes.root} spacing={16}>
                  <Grid item xs={12} sm={6} lg={6} xl={5}>
                    <TextField fullWidth id="standard-name" label="Nome" className={classes.textField} value={this.state.name} onChange={this.handleChange("name")} margin="normal" />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} xl={5}>
                    <TextField fullWidth id="surname" label="Sobrenome" className={classes.textField} value={this.state.surname} onChange={this.handleChange("surname")} margin="normal" />
                  </Grid>

                  <Grid item xs={12} lg={12} xl={10}>
                    <TextField fullWidth id="email" label="E-mail" type="email" className={classes.textField} value={this.state.email} onChange={this.handleChange("email")} margin="normal" />
                  </Grid>

                  <Grid item xs={12} sm={6} lg={6} xl={5}>
                    <FormControl fullWidth className={classNames(classes.margin, classes.textField)}>
                      <InputLabel htmlFor="password">
                        Senha (8-15 caractéres)
                      </InputLabel>
                      <Input id="password" type={this.state.showPassword ? "text" : "password"} value={this.state.password} onChange={this.handleChange("password")} endAdornment={<InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6} xl={5}>
                    <FormControl fullWidth className={classNames(classes.margin, classes.textField)}>
                      <InputLabel htmlFor="repeatPassword">
                        Repetir senha
                      </InputLabel>
                      <Input id="repeatPassword" type={this.state.showPassword ? "text" : "repeatPassword"} value={this.state.password} onChange={this.handleChange("repeatPassword")} endAdornment={<InputAdornment position="end">
                            <IconButton aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
                              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>} />
                    </FormControl>
                  </Grid>
                </Grid>
              <Grid container item xs={12} sm={9} justify="flex-end">
                  <Button className={classes.btnMargin} variant="contained" color="primary">
                    Salvar mudanças
                  </Button>
                  <Button className={classes.btnMargin} variant="contained" color="secondary">
                    Cancelar
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Grid container className={classes.someSpace} justify="space-between" spacing={16}>            
          </Grid>

          <Typography variant="h4" component="h2" gutterBottom>
            Informações da Conta
          </Typography>
          <Typography variant="p" paragraph>
            <strong>Tipo de Conta:</strong> Assinatura Plano M
          </Typography>
          <Typography variant="p" paragraph>
            <strong>Data da Assinatura:</strong> 30/01/2018
          </Typography>
          <Typography variant="p" paragraph>
            <strong>Forma de pagamento:</strong> Cartão de crédito
          </Typography>
          <Typography variant="p" paragraph>
            <strong>Data de expiração:</strong> 30/01/2019
          </Typography>
        </MuiThemeProvider>
      </React.Fragment>;
  }
}

export default withStyles(styles)(Perfil);