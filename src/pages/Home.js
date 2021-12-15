import React from 'react'
import { Typography, Grid, Container, Box, Button } from '@mui/material';
import useStyles from '../styles';

function Home() {
  const classes = useStyles();

  return (
    <div>
      <main>
        <div className={classes.container}>

          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Nephesh Coaching
            </Typography>
            <Typography sx={{ fontFamily: 'calligraffiti' }} variant="h2" align="center" color="textPrimary" gutterBottom>
              Nephesh Coaching
            </Typography>
            <Typography sx={{ fontFamily: 'Corinthia' }} variant="h2" align="center" color="textPrimary" gutterBottom>
              Nephesh Coaching
            </Typography>
            <Typography variant="p" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum eros libero, sit amet porttitor nisl consequat eu. In a massa at mi bibendum varius vel quis enim. Cras aliquam fringilla dolor, id feugiat mi molestie eget. Praesent vulputate convallis mauris eget sodales. Quisque quis libero mauris. Morbi rutrum tortor risus, non scelerisque urna facilisis nec. Praesent semper consectetur mauris, eget efficitur urna rhoncus vel.
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
