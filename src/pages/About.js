import React from 'react';
import { Box, Container, Typography, Link, ImageList, ImageListItem } from '@mui/material';
import useStyles from '../styles';
import karen1 from '../assets/images/WallerKaren-1.jpeg'

function About() {
  const classes = useStyles();
  return (
    <Box marginTop={3} marginBottom={3}>
    {/* <div className={classes.container}> */}
    
    <Container maxWidth='md'>
      <Typography sx={{ fontFamily: 'Corinthia' }} variant="h1" align="center" color="textPrimary" gutterBottom>
        Life &nbsp; Journeying
      </Typography>
      <Box>
        <img className='textWrapRight' src={karen1} width={320}></img>

        {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList> */}

        <Typography paragraph >
          As a qualified and experienced Life-Coach I, Karen, have over 8 years experience with over 70 ladies in; Life-coaching, pastoral prayer ministry, Bethel Sozo ministry and mentoring. I offer "Life-Journeying" to a small number of ladies throughout the year. It is a hybrid Spirit-led ministry and I continue to be blessed and excited by the anointing that the sessions carry to bring freedom, vision, momentum and peace into many ladies lives.
        </Typography>
        <Typography paragraph>
          So what is it like? Well, for most its spiritual journeying where we include; creativity, talking and listening using counselling tools, spirit - led praying, coaching and even mentoring to help you move forward in one or many areas of your life.For some it is simply contemplative prayer with support and encouragement... for others it’s life - coaching which includes tools, questions, exercises and goal - setting to help you pursue a specific goal or dream.
        </Typography>
        <Typography paragraph>
          Personally, I like to think of it as being your “Come Alongside Me” person who journeys with you and with God, helping you flourish more freely and more fully in your life in a confidential, non - judgemental, genuinely caring, loving and peaceful way.
        </Typography>
        <Typography paragraph>
          I have come alongside young ladies through to those in retirement; mums, students, professionals, business and ministry leaders, retirees, creatives, teachers and more... so many beautiful ladies... I have come alongside people in the areas of; life re - shaping, marriage and relationships, anxiety and stress, becoming or being a mum, career change, health goals, life transitions, fear and depression, confidence and identity building, positive menopause transition and grief and loss.
        </Typography>
        <Typography paragraph>
          Most of all I believe in creating a grace - led, loving, safe, empowering and God - centred environment where I can help you journey in a Spirit - led way that is right for you and bring you more fully into everything you were created to be!
        </Typography>
        <Typography paragraph>
          What does it cost ? Sessions are for 90 minutes.An Intro Session is free.All sessions can be Face - to - Face or by Zoom, Skype, Facetime or Phone(£30 per session).For ladies who commit to a number of sessions I also give regular encouragement emails to support you along the journey...
        </Typography>
        <Typography paragraph>
          So finally, if you feel Life - Journeying may be for you, feel free to contact me for a no obligation chat where we can get to know each other a little more and see if I may be the right person to come alongside you… Love and blessings, Karen x
        </Typography>
      </Box>



    </Container>
    {/* </div> */}
    </Box>
  )
}

export default About






