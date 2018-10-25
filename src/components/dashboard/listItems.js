import React, {Component} from "react";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import WifiIcon from "@material-ui/icons/Wifi";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const styles = theme => ({
  nested: {    
    paddingLeft: theme.spacing.unit * 5
  },  
  whiteColor: {
    color: "#fff"
  },
  subListBgDark: {
    backgroundColor: "rgba(0,0,0,0.25)"
  }
});

class MainListItems extends Component {
  state = { 
    open: false,
    selectedIndex: 0, 
  };

  handleClick = (e) => {
    this.setState({ [e]: !this.state[e] });
  };

handleListItemClick = (event, index) => {
  this.setState({ selectedIndex: index });
};

  render() {
    const { classes } = this.props;

    return <React.Fragment>
        <ListItem button selected={this.state.selectedIndex === 0} onClick={event => this.handleListItemClick(event, 0)} component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Painel" />
        </ListItem>
        <ListItem button selected={this.state.selectedIndex === 1} onClick={this.handleClick.bind(this, 1)}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Admin" />
          {this.state[1] ? <ExpandLess className={classes.whiteColor} /> : <ExpandMore className={classes.whiteColor} />}
        </ListItem>
      <Collapse key="1" in={this.state[1]} timeout="auto" unmountOnExit>
        <List className={classes.subListBgDark} component="div" disablePadding>
            <ListItem button className={classes.nested} selected={this.state.selectedIndex === 8} onClick={event => this.handleListItemClick(event, 8)} component={Link} to="/perfil">
              <ListItemText inset primary="Perfil" />
            </ListItem>
          <ListItem button className={classes.nested} selected={this.state.selectedIndex === 9} onClick={event => this.handleListItemClick(event, 9)} component={Link} to="/gerenciamento-de-usuarios">
              <ListItemText inset primary="Gerenciamento de Usuários" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button selected={this.state.selectedIndex === 2} onClick={event => this.handleListItemClick(event, 2)}>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary="Transmissão" />
        </ListItem>

        <ListItem button selected={this.state.selectedIndex === 3} onClick={event => this.handleListItemClick(event, 3)} component={Link} to="/galeria">
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText primary="Galeria" />
        </ListItem>
      <ListItem button selected={this.state.selectedIndex === 4} onClick={this.handleClick.bind(this, 2)}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        {this.state[2] ? <ExpandLess className={classes.whiteColor} /> : <ExpandMore className={classes.whiteColor} />}
        </ListItem>
      <Collapse key="2" in={this.state[2]} timeout="auto" unmountOnExit>
        <List className={classes.subListBgDark} component="div" disablePadding>
            <ListItem button className={classes.nested} selected={this.state.selectedIndex === 5} onClick={event => this.handleListItemClick(event, 5)}>
              <ListItemText inset primary="Vídeo" />
            </ListItem>
            <ListItem button className={classes.nested} selected={this.state.selectedIndex === 6} onClick={event => this.handleListItemClick(event, 6)}>
              <ListItemText inset primary="Live" />
            </ListItem>
            <ListItem button className={classes.nested} selected={this.state.selectedIndex === 7} onClick={event => this.handleListItemClick(event, 7)}>
              <ListItemText inset primary="Audiência" />
            </ListItem>
          </List>
        </Collapse>
      </React.Fragment>;
  }
}

MainListItems.propTypes = {
  classes: PropTypes.object.isRequired
};

export class SecondaryListItems extends Component {
  render() {
    return (
      <React.Fragment>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary="Suporte" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </React.Fragment>
    )
  }
}

const MainList = withStyles(styles)(MainListItems);
const SecondaryList = withStyles(styles)(SecondaryListItems);

export {MainList, SecondaryList };