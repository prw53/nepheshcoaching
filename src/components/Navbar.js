import React from 'react';
import { Box, Button, AppBar, Tabs, Tab, Toolbar, IconButton, Typography, Link, MenuItem } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// import { MenuIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';


import useStyles from '../styles';

export default function Navbar() {
  const classes = useStyles();
  const navList = ["Home", "About", "Contacts"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    // alert('The page is', page);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {/* may be make a seperate component for the toolbar and have the appbar in the app.js */}
        <Toolbar>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>

            {/* Menu Button */}
            <Box >
              <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Nav Links */}
            <Box sx={{ display: "flex" }}>

              <MenuItem>
                <Typography variant="h6" textAlign="center">
                  <Link href="Home" color="inherit">Home </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="h6" textAlign="center">
                  <Link href="About" color="inherit">About</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="h6" textAlign="center">
                  <Link href="Contacts" color="inherit">Contact Me</Link>
                </Typography>
              </MenuItem>
              {/* <Typography variant="h6" className={classes.menuButton}>{page}</Typography> */}

            </Box>

            {/* Button Link */}
            <Box>
              <Button variant='contained' disableElevation component={Link} to={'contacts'}>End</Button>
            </Box>

          </Box>

          {/* Nav Links */}
          {/* <Box sx={{ display: "flex" }}>
              {navList.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu(page)}>
                  <Typography variant="h6" textAlign="center">{page}</Typography>
                </MenuItem>
                // <Typography variant="h6" className={classes.menuButton}>{page}</Typography>
              ))}
            </Box> */}

          {/* <Button color="inherit">Login</Button> */}

        </Toolbar>
      </AppBar>

    </div >
  );
}