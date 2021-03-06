import { Box, Button, Card, CardContent,Container,FormHelperText, Grid, TextField, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import useStyles from '../styles';
import { textAlign } from '@mui/system';

const initialFValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
}
const maxMessage = "500"

function Contacts() {
  const classes = useStyles();
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState(initialFValues);
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_f6ynrg8', 'template_i63ce1y', form.current, 'user_AiIgMvHTL545jVQ7Y2tRb')
      .then((result) => {
        setSent(true)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Box marginTop={5} marginBottom={3}>
      <Container>
      <Card style={{ maxWidth: 450, margin: '0 auto', padding: '5px 5px' }}>
        <CardContent>
          {!sent ? (
            <form ref={form} onSubmit={sendEmail}>
              <Typography gutterBottom variant='h4' align='center'>Contact Form</Typography>
              <Typography gutterBottom color='textSecondary' variant='body2' align='center' component='p'>
                Please submit your details and I will get back to you shortly
              </Typography>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label='First Name'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleInputChange}
                    placeholder='Enter first name'
                    variant='outlined'
                    fullWidth
                    required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label='Last Name'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleInputChange}
                    placeholder='Enter last name'
                    variant='outlined'
                    fullWidth
                    required />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type='email'
                    label='Email'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    placeholder='Enter your email'
                    variant='outlined'
                    fullWidth
                    required />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    className={classes.helperTextRight}
                    label='Message'
                    name='message'
                    value={values.message}
                    onChange={handleInputChange}
                    multiline minRows={5}
                    inputProps={{ maxLength: maxMessage }}
                    placeholder='Type your message here...'
                    // helperText={`char... ${values.message.length}/500`}
                    variant='outlined'
                    fullWidth
                    required />
                    <FormHelperText sx={{textAlign: 'right'}} >{values.message.length}/{maxMessage}</FormHelperText>
                </Grid>
                <Grid xs={12} item>
                  <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          ) : (
            <Box>
              <Typography gutterBottom variant='h5' align='center'>Contact Form</Typography>
              <Typography variant='h6' align='center'>
                Thank you, I will be in contact soon
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
      </Container>
    </Box>
  )
};

export default Contacts
