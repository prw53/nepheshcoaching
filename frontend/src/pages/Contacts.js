import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import axios from 'axios';

const initialFValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

function Contacts() {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values.message,
      [name]: value
    })
  }

  const handleSend = async () => {
    setSent(true)
    setText(
      'First Name: ' + initialFValues.firstName +
      'Last Name: ' + initialFValues.lastName
    )
    try {
      await axios.post("http://localhost:4000/send_mail", {
        text: text,
        // method: "POST",
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ values })

        // method: "POST",
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ nick, email, message })

      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Box marginTop={3} marginBottom={3}>
      {/* <Typography variant='h3'>This is the Contacts page!</Typography> */}
      <Card style={{ maxWidth: 450, margin: '0 auto', padding: '5px 5px' }}>
        <CardContent>
          {!sent ? (
            <form onSubmit={handleSend}>

              {/* <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
              <button type='submit' >Send Email</button> */}

              <Typography gutterBottom variant='h5' align='center'>Contact Form</Typography>
              <Typography gutterBottom color='textSecondary' variant='body2' align='center' component='p'>Submit your details and I will get back to you shortly</Typography>
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
                    placeholder='Enter your email'
                    variant='outlined'
                    fullWidth
                    required />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label='Message'
                    name='message'
                    value={values.message}
                    multiline minRows={5}
                    placeholder='Type your message here...'
                    variant='outlined'
                    fullWidth
                    required />
                </Grid>
                <Grid xs={12} item>
                  <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                </Grid>
              </Grid>

            </form>
          ) : (
            <Typography variant='h6' align='center'>
              Thank you, I will be in contact!
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  )
};

export default Contacts
