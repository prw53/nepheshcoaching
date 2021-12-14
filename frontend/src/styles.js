import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 5)
  },
  icon: {
    marginRight: '20px',
  },
  navLogo: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  buttons: {
    marginTop: '40px',
  },
  root: {
    flexGrow: 1,
    // marginTop: 0,
    // height: 100,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
    color: theme.palette.secondary,
    "&:hover": {
      // color: "white",
      textDecoration: "none",
      // borderBottom: "1px solid white",
    },
    "&:focus": {
      // color: "white",
      textDecoration: "none",
      // borderBottom: "1px solid white",
    }
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.secondary.light,
  },
  navlinks: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
    "&:hover": {
      color: "orange",
      textDecoration: "none",
    },
    // link: {
    //   textDecoration: "none",
    //   color: "white",
    //   fontSize: "20px",
    //   marginLeft: theme.spacing(20),
    //   "&:hover": {
    //     color: "yellow",
    //     borderBottom: "1px solid white",
    //   },
  },
}));

export default useStyles;