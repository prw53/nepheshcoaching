import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import useStyles from '../styles';

function About() {
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <Typography variant='h2'>
        This is the About page!
      </Typography>

      <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum tortor lectus, vitae viverra augue cursus ut. Phasellus varius quam vitae quam commodo pellentesque. Morbi quis nisl eget enim feugiat sollicitudin. Maecenas mattis est porta consectetur dapibus. Quisque euismod vel erat non ornare. Suspendisse potenti. In hac habitasse platea dictumst. Sed hendrerit condimentum augue, eget sollicitudin mauris convallis a. Donec condimentum arcu in velit posuere volutpat.
      </Typography>
      <Typography variant="p">
        Phasellus sit amet pulvinar nibh. Nullam dolor tellus, elementum tincidunt congue quis, malesuada sit amet metus. Ut justo felis, suscipit ac condimentum pellentesque, blandit eget nibh. Donec venenatis ullamcorper felis ut posuere. Fusce ligula purus, rhoncus non interdum id, pulvinar porttitor diam. Curabitur urna metus, tincidunt nec ullamcorper ut, pretium a risus. Suspendisse elementum tristique nulla in bibendum. In molestie velit id magna dictum, id dictum est dictum. Aliquam erat volutpat. Curabitur eget ipsum erat. Sed vestibulum purus sit amet auctor consequat. Mauris venenatis nisl in porta aliquet. Mauris gravida tellus arcu, quis condimentum dolor eleifend vel. Proin placerat tortor et leo hendrerit facilisis. Sed ac ullamcorper nisi.
      </Typography>
      <Typography variant="p">
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Vestibulum nec odio felis. Sed purus dolor, condimentum vitae eleifend ac, ultricies sed augue. Praesent a varius ex. Cras placerat tempor eros et suscipit. Curabitur vitae volutpat diam. Etiam faucibus neque mauris, eget laoreet lorem ultrices et. Donec lobortis semper lacus. Nulla eleifend fermentum magna, a scelerisque enim tincidunt quis. Phasellus at tempor diam. Aenean eu sollicitudin libero. Vestibulum aliquam ligula sit amet dui auctor ultrices id non purus.
      </Typography>
    </Container>
  )
}

export default About
