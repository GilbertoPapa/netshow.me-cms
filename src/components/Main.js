import React from "react";
import { Switch, Route } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard";
import Perfil from "./admin/Perfil";
import Usuarios from "./admin/GerenciamentoDeUsuarios";
import Galeria from "./album/Album";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: drawerWidth,
    marginTop: "80px"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class Main extends React.Component {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/gerenciamento-de-usuarios" component={Usuarios} />
          <Route path="/galeria" component={Galeria} />
        </Switch>
      </main>
    );
  }
}

export default withStyles(styles)(Main);