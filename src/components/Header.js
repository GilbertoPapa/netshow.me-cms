import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { MainList, SecondaryList} from "./dashboard/listItems";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  avatar: {
    margin: 10,
    width: 28,
    height: 28
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: "none"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  menuItem: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  logo: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "30px"
  },
  linkPrimary: {
    color: "var(--primary)",
    textDecoration: "none"
  },
  menuButtonHidden: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerPaper: {
    backgroundColor: custom.palette.secondary.main,
    width: drawerWidth
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  drawerBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%"
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

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#06baf6"
    },
    secondary: {
      main: "#314E6F"
    },
    type: "dark",
  }
});

class MainAppBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, theme } = this.props;
    const { open } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: "top", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }} open={isMobileMenuOpen} onClose={this.handleMobileMenuClose}>
        <MenuItem>
          <IconButton color="primary">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notificações</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <Avatar alt="Layla Vicente" src="/img/darth-vader.jpg" className={classes.avatar} />
          <p>Layla Vicente</p>
        </MenuItem>
      </Menu>;

    return <React.Fragment>
        <MuiThemeProvider theme={custom}>
          <CssBaseline />
          <AppBar position="fixed" color="default" className={classNames(
              classes.appBar,
              {
                [classes.appBarShift]: open
              }
            )}>
            <Toolbar>
              <IconButton color="primary" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, open && classes.hide)}>
                <MenuIcon />
              </IconButton>
              <Button component={Link} to="/">
              <img className={classes.logo} src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Logo" />
              </Button>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Tooltip title="Notificações">
                  <IconButton color="primary">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Button className={classes.rightIcon} aria-owns={isMenuOpen ? "material-appbar" : null} aria-haspopup="true" onClick={this.handleProfileMenuOpen} color="secondary">
                  <Avatar alt="Layla Vicente" src="/img/darth-vader.jpg" className={classes.avatar} /> Layla Vicente
                </Button>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="primary">
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
        </MuiThemeProvider>

        <MuiThemeProvider theme={darkTheme}>
          <Drawer className={classes.drawer} variant="persistent" component="aside" anchor="left" open={open} classes={{ paper: classes.drawerPaper }}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List classNames={classes.drawerItems}>
              <MainList />
            </List>
            <Divider />
            <List className={`${classes.drawerItems} ${classes.drawerBottom}`}>
              <SecondaryList />
            </List>
          </Drawer>
        </MuiThemeProvider>
      </React.Fragment>;
  }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MainAppBar);