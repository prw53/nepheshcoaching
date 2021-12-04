import { Typography } from '@material-ui/core';
import React from 'react';
import Link from '@material-ui/core/Link';
import useStyles from '../styles';

function Contacts() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h2'>
        This is the Contacts page!
      </Typography>
      <Link href="About" className={classes.menuButton}>
        <Typography variant="h6" className={classes.menuButton}>
          AboutM
        </Typography>
      </Link>
    </div>
  )
}

export default Contacts
