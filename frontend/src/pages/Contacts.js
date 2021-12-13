import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

// import axios from 'axios';

const initialFValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
}

function Contacts() {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const [values, setValues] = useState(initialFValues);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    // alert(values.firstName, values.lastName, values.email, values.message)
    // alert(firstName + lastName + email + message)
    // console.log(values)

    alert(values.firstName + values.lastName + values.email + values.message)
    setSent(true)

    // emailjs.sendForm('service_f6ynrg8', 'template_i63ce1y', form.current, 'user_AiIgMvHTL545jVQ7Y2tRb')
    //   .then((result) => {
    //     setSent(true)
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };

  // const handleSendEmail = async () => {
  //   setSent(true)
  //   setText(
  //     'First Name: ' + initialFValues.firstName +
  //     'Last Name: ' + initialFValues.lastName
  //   )
  //   try {
  //     console.log('Trying catch')
  //     // await axios.post("http://localhost:4000/send_mail", {
  //     //   text: text,
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  return (
    <Box marginTop={3} marginBottom={3}>
      {/* <Typography variant='h3'>This is the Contacts page!</Typography> */}
      <Card style={{ maxWidth: 450, margin: '0 auto', padding: '5px 5px' }}>
        <CardContent>
          {!sent ? (
            <form ref={form} onSubmit={sendEmail}>

             
                {/* <label>Name</label>
                <input type="text" name="firstName" />
                <label>Name</label>
                <input type="text" name="lastName" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" /> */}
           

              {/* <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
              <button type='submit' >Send Email</button> */}

              <Typography gutterBottom variant='h5' align='center'>Contact Form</Typography>
              <Typography gutterBottom color='textSecondary' variant='body2' align='center' component='p'>Submit your details and I will get back to you shortly</Typography>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label='First Name'
                    name='firstName'
                    // value={firstName} 
                    // onChange={(e) => setFirstName(e.target.value)}
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
                    // value={lastName} 
                    // onChange={(e) => setLastName(e.target.value)}
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
                    // value={email} 
                    // onChange={(e) => setEmail(e.target.value)}
                    value={values.email}
                    onChange={handleInputChange}
                    placeholder='Enter your email'
                    variant='outlined'
                    fullWidth
                    required />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label='Message'
                    name='message'
                    // value={message} 
                    // onChange={(e) => setMessage(e.target.value)}
                    value={values.message}
                    onChange={handleInputChange}
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
