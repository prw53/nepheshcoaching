import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core';
// import { PhotoCamera } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import useStyles from '../styles';

function Home() {
  const classes = useStyles();

  return (
    <div>
      {/* <Typography variant="h2">
        This is the Home page!
      </Typography> */}

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              My Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone this is a very long sentance to see how well it wraps round and makes a good demonstration of a paragraph.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>

          </Container>
        </div>
      </main>

    </div>
  )
};

export default Home;
