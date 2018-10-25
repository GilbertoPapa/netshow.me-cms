import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";

// const drawerWidth = 240;

// const styles = theme => ({
//   // root: {
//   //   display: "flex"
//   // },
//   // appBar: {
//   //   transition: theme.transitions.create(["margin", "width"], {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.leavingScreen
//   //   })
//   // },
//   // appBarShift: {
//   //   width: `calc(100% - ${drawerWidth}px)`,
//   //   marginLeft: drawerWidth,
//   //   transition: theme.transitions.create(["margin", "width"], {
//   //     easing: theme.transitions.easing.easeOut,
//   //     duration: theme.transitions.duration.enteringScreen
//   //   })
//   // },
//   // hide: {
//   //   display: "none"
//   // },
//   // grow: {
//   //   flexGrow: 1
//   // },
//   // menuButton: {
//   //   marginLeft: -12,
//   //   marginRight: 20
//   // },
//   // title: {
//   //   display: "none",
//   //   [theme.breakpoints.up("sm")]: {
//   //     display: "block"
//   //   }
//   // },
//   // menuItem: {
//   //   display: "none",
//   //   [theme.breakpoints.up("sm")]: {
//   //     display: "block"
//   //   }
//   // },
//   // sectionDesktop: {
//   //   display: "none",
//   //   [theme.breakpoints.up("md")]: {
//   //     display: "flex"
//   //   }
//   // },
//   // sectionMobile: {
//   //   display: "flex",
//   //   [theme.breakpoints.up("md")]: {
//   //     display: "none"
//   //   }
//   // },
//   // button: {
//   //   margin: theme.spacing.unit
//   // },
//   // leftIcon: {
//   //   marginRight: theme.spacing.unit
//   // },
//   // rightIcon: {
//   //   marginLeft: theme.spacing.unit
//   // },
//   // logo: {
//   //   display: "block",
//   //   maxWidth: "100%",
//   //   maxHeight: "30px"
//   // },
//   // linkPrimary: {
//   //   color: "var(--primary)",
//   //   textDecoration: "none"
//   // },
//   // menuButtonHidden: {
//   //   display: "none"
//   // },
//   // drawer: {
//   //   width: drawerWidth,
//   //   flexShrink: 0
//   // },
//   // drawerHeader: {
//   //   display: "flex",
//   //   alignItems: "center",
//   //   padding: "0 8px",
//   //   ...theme.mixins.toolbar,
//   //   justifyContent: "flex-end"
//   // },
//   // drawerPaper: {
//   //   backgroundColor: custom.palette.secondary.main,
//   //   width: drawerWidth
//   // },
//   // drawerPaperClose: {
//   //   overflowX: "hidden",
//   //   transition: theme.transitions.create("width", {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.leavingScreen
//   //   }),
//   //   width: theme.spacing.unit * 7,
//   //   [theme.breakpoints.up("sm")]: {
//   //     width: theme.spacing.unit * 9
//   //   }
//   // },
//   // content: {
//   //   flexGrow: 1,
//   //   padding: theme.spacing.unit * 3,
//   //   transition: theme.transitions.create("margin", {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.leavingScreen
//   //   }),
//   //   marginLeft: 0,
//   //   marginTop: "80px"
//   // },
//   // contentShift: {
//   //   transition: theme.transitions.create("margin", {
//   //     easing: theme.transitions.easing.easeOut,
//   //     duration: theme.transitions.duration.enteringScreen
//   //   }),
//   //   marginLeft: drawerWidth
//   // }
// });

// const custom = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#06baf6"
//     },
//     secondary: {
//       main: "#314E6F"
//     }
//   }
// });

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

// class App extends Component {
//   state = {
//     open: true
//   };

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     // const { classes } = this.props;
//     // const { open } = this.state;

//     return <React.Fragment>      
//       <div>
//         <Header />
//         <Main />
//       </div>
// )
//       </React.Fragment>;
//   }
// }

export default App;
