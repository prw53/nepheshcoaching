import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { PhotoCamera, AccountCircle } from '@material-ui/icons';
import { PhotoCamera } from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import { Box, Menu, MenuItem } from '@material-ui/core';
import useStyles from '../styles';


export default function Navbar() {
  const classes = useStyles();
  // const navList = ["Home", "About", "Contacts"];

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        {/* may be make a seperate component for the toolbar and have the appbar in the app.js */}
        <Toolbar>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>

            {/* Logo */}
            <Box >
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
              <IconButton className={classes.navLogo} color="inherit">
                <PhotoCamera />
              </IconButton>
            </Box>

            {/* Links */}
            <Box className={classes.navlinks} sx={{ display: "flex" }}>
              <Typography variant="h6" className={classes.navlinks}>
                {/* <Button color="inherit">AboutB</Button> */}
                <Link href="Home" className={classes.navlinks} color="inherit">Home </Link>
              </Typography>
              <Typography variant="h6" className={classes.navlinks}>
                {/* <Button color="inherit">AboutB</Button> */}
                <Link href="About" className={classes.navlinks} color="inherit">About</Link>
              </Typography>
              {/* This is another way that works too
              <Link href="About" className={classes.menuButton} color="inherit">
                <Typography variant="h6" className={classes.menuButton}>
                  About-LT
                </Typography>
              </Link> */}
              <Typography variant="h6" className={classes.menuButton}>
                <Link href="Contacts" className={classes.menuButton} color="inherit">Contact Us</Link>
              </Typography>
            </Box>

            {/* Button Link */}
            <Box>
              <Button variant='contained' disableElevation component={Link} to={'contacts'}>End</Button>
            </Box>

          </Box>


          {/* This will step through and create the meues */}
          {/* <Box sx={{ display: "flex" }}>
            {navList.map((obj) => (
              <>
                <Typography variant="h6" className={classes.menuButton}>{obj}</Typography>
              </>
            ))}
          </Box> */}



          {/* <Button color="inherit">Login</Button> */}

        </Toolbar>
      </AppBar>

    </div>
  );
}