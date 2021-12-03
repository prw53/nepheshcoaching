// import React, { useState } from 'react'
// import { Typography, AppBar, Toolbar, Box,  Container } from '@material-ui/core';
// import { PhotoCamera, AccountCircle } from '@material-ui/icons';
// import { Link } from 'react-router-dom';
// import useStyles from '../styles';

// function Navbar() {
//   const classes = useStyles();
//   return (
//     <div>
//       <AppBar position="relative">
//         <Toolbar>
//           <PhotoCamera className={classes.icon} />
//           <Typography variant="h6">
//             About
//           </Typography>
//           <Typography variant="h6">
//             Contact Us
//           </Typography>
//           {/* <Link to='/' className="navbar-logo">
//             TRVL
//           </Link> */}
//         </Toolbar>
//       </AppBar>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { PhotoCamera, AccountCircle } from '@material-ui/icons';
import { PhotoCamera } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';


import useStyles from '../styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function Navbar() {
  const classes = useStyles();
  const navList = ["Home", "About", "Contacts"];

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        {/* may be make a seperate component fror the toolbar and have the appbar in the app.js */}
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
            <Box className={classes.navlinks}>
              <Typography variant="h6" className={classes.menuButton}>
                Home
              </Typography>
              <Typography variant="h6" className={classes.menuButton}>
                {/* <Button color="inherit">AboutB</Button> */}
                About
              </Typography>
              <Typography variant="h6" className={classes.menuButton}>
                Contact Us
              </Typography>
            </Box>

            <Box>
              <Button variant='contained' disableElevation>End</Button>
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