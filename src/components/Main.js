import React from "react";
import { Switch, Route } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard";
import Perfil from "./admin/Perfil";
import Usuarios from "./admin/GerenciamentoDeUsuarios";
import Transmissao from "./transmissao/Transmissao";
import Galeria from "./album/Album";
import Analytics from "./analytics/analyticsLives/AnalyticsLive";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    margin: "80px auto 0",
    maxWidth: "1280px"
  }  
});

class Main extends React.Component {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return <main className={classNames(classes.content, {
          [classes.contentShift]: open
        })}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/admin/perfil" component={Perfil} />
          <Route path="/admin/gerenciamento-de-usuarios" component={Usuarios} />
          <Route path="/transmissao" component={Transmissao} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/analytics/video" component={Analytics} />
        </Switch>
      </main>;
  }
}

export default withStyles(styles)(Main);