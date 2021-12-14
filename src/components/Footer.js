import React from 'react'
import { Typography } from '@mui/material';
import useStyles from '../styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer bar
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose.
        </Typography>
      </footer>
    </div>
  )
};
