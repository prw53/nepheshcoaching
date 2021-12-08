import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
// import useStyles from '../styles';

function Contacts() {
  // const classes = useStyles();
  return (
    <Box marginTop={3} marginBottom={3}>
      {/* <Typography variant='h3'>This is the Contacts page!</Typography> */}
      <Card style={{maxWidth:450, margin:'0 auto', padding:'5px 5px'}}>
        <CardContent>
          <Typography gutterBottom variant='h5' align='center'>Contact Form</Typography>
          <Typography gutterBottom color='textSecondary' variant='body2' align='center' component='p'>Submit your details and I will get back to you shortly</Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField label='First Name' placeholder='Enter first name' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label='Last Name' placeholder='Enter last name' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type='email' label='Email' placeholder='Enter email name' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type='number' label='Phone' placeholder='Enter phone number' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label='Message' multiline minRows={4} placeholder='Type your message here' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Contacts
