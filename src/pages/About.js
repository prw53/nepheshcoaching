import React from 'react';
import {Typography, Link} from '@mui/material';
import useStyles from '../styles';

function About() {
  // const classes = useStyles();
  return (
    <div>
      <Typography variant='h2'>
        This is the About page!
      </Typography>
      <Link href="home">
        <Typography variant="h6">
          Go to Home
        </Typography>
      </Link>
    </div>
  )
}

export default About
