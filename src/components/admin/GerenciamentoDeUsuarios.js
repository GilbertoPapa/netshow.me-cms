import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from '@material-ui/icons/Check';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const styles = theme => ({
  btnMargin: {
    margin: "1rem",

    "&:last-child": {
      marginRight: 0
    }
  },

  form: {
    margin: "0 auto 2rem"
  },

  formControl: {
    minWidth: 200
  },

  someSpace: {
    padding: "1rem 0 4rem"
  },

  checked: {},

  checkBox: {
    [theme.breakpoints.up("md")]: {
      margin: "0 0 0 1.5rem",

      "&:first-child": {
        margin: "0"
      }
    }
  },

  customHeadTh: {
    backgroundColor: custom.palette.secondary.main,
    color: theme.palette.common.white,
    fontSize: "1rem",

    "&:first-child": {
      borderRadius: "1rem 0 0 0"
    },

    "&:last-child": {
      borderRadius: "0 1rem 0 0"
    }
  },

  row: {
    "&:nth-of-type(even)": {
      backgroundColor: "#eee",
    },
  },

  center: {
    textAlign: "center"
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

class Usuarios extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
    usuario: "",
    check: "",
    upload: false,
    analytics: false,
    transmissao: false,
    galeria: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });    
  };

  handleCheck = check => event => {
    this.setState({ [check]: event.target.checked });
  }

  render() {
    const { classes } = this.props;

    return <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={custom}>
          <Typography variant="h2" component="h1" gutterBottom>
            Gerenciamento de Usuários
          </Typography>
          <Grid container className={classes.someSpace} justify="space-between" spacing={16} />
          <Typography variant="h4" component="h2" gutterBottom>
            Adicionar usuário
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={16} alignItems="center">
              <Grid item xs={12} lg={6}>
                <TextField fullWidth id="email" label="E-mail" type="email" className={classes.textField} value={this.state.email} onChange={this.handleChange("email")} margin="normal" />
              </Grid>
              <Grid item xs={12} lg={3}>
                <TextField fullWidth id="standard-name" label="Nome" className={classes.textField} value={this.state.name} onChange={this.handleChange("name")} margin="normal" />
              </Grid>
              <Grid item xs={12} lg={3}>
                <TextField fullWidth id="surname" label="Sobrenome" className={classes.textField} value={this.state.surname} onChange={this.handleChange("surname")} margin="normal" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="tipo-de-usuario">
                    Tipo de Usuário
                  </InputLabel>
                  <Select native value={this.state.usuario} onChange={this.handleChange("usuario")} inputProps={{ name: "usuario", id: "tipo-de-usuario" }}>
                    <option value="" />
                    <option value={"Administrador"}>Administrador</option>
                    <option value={"Editor"}>Editor</option>
                    <option value={"Usuário"}>Usuário</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid container item xs={12} lg={6}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Tipos de Acesso
                  </Typography>
                </Grid>
                <Grid item container xs={12} justify="space-between">
                  <FormControlLabel className={classes.checkBox} control={<Checkbox checked={this.state.upload} onChange={this.handleCheck("upload")} value="upload" />} label="Upload" />

                  <FormControlLabel className={classes.checkBox} control={<Checkbox checked={this.state.analytics} onChange={this.handleCheck("analytics")} value="analytics" />} label="Analytics" />

                  <FormControlLabel className={classes.checkBox} control={<Checkbox checked={this.state.transmissao} onChange={this.handleCheck("transmissao")} value="transmissao" />} label="Transmissão" />

                  <FormControlLabel className={classes.checkBox} control={<Checkbox checked={this.state.galeria} onChange={this.handleCheck("galeria")} value="galeria" />} label="Galeria" />
                </Grid>
              </Grid>
              <Grid container item xs={12} justify="flex-end">
                <Button color="primary" variant="contained">
                  Adicionar usuário
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography paragraph>Usuários (2/10)</Typography>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
              <TableCell className={classes.customHeadTh}>Nome</TableCell>
                <TableCell className={classes.customHeadTh}>
                  Tipo de Usuário
                </TableCell>
                <TableCell className={`${classes.customHeadTh} ${classes.center}`}>
                  Upload
                </TableCell>
                <TableCell className={`${classes.customHeadTh} ${classes.center}`}>
                  Analytics
                </TableCell>
                <TableCell className={`${classes.customHeadTh} ${classes.center}`}>
                  Transmissão
                </TableCell>
                <TableCell className={`${classes.customHeadTh} ${classes.center}`}>
                  Galeria
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.row}>
                <TableCell>Layla Vicente</TableCell>
                <TableCell>Administrador</TableCell>
                <TableCell className={classes.center}>
                  <CheckIcon />
                </TableCell>
                <TableCell className={classes.center}>
                  <CheckIcon />
                </TableCell>
                <TableCell className={classes.center}>
                  <CheckIcon />
                </TableCell>
                <TableCell className={classes.center}>
                  <CheckIcon />
                </TableCell>
              </TableRow>
              <TableRow className={classes.row}>
                <TableCell>Adriana Porto</TableCell>
                <TableCell>Padrão</TableCell>
                <TableCell className={classes.center}>
                  <CheckIcon />
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell className={classes.center}>
                  <CheckIcon />
                </TableCell>
              </TableRow>

              <TableRow className={classes.row}>
                <TableCell>Jar Jar Binks</TableCell>
                <TableCell>Editor</TableCell>
                <TableCell />
                <TableCell />
                <TableCell className={classes.center}>
                  <CheckIcon />
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </React.Fragment>;
  }
}

export default withStyles(styles)(Usuarios);