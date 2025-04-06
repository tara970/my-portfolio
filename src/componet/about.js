import { Avatar, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import tara from '../tara.jpg';

function About() {
  return (
    <Container sx={{mt:8 , textAlign:'center'}}>
      
          <Avatar sx={{width:'140px', height:'140px', mx:'auto', mb: 2}} src={tara}/>
        
          <Typography variant='h4'>
            Hi I am Tara Jef
          </Typography>
          <Typography variant='body1' color='text.secondary' mt={2}>
            I Realy Love Freont End Developer
            <br/>
            And I would really like to progress in this area.
          </Typography>
          <Typography variant='h6' sx={{marginTop:'25px', color:'red'}}>
            Phone Number: 09334427462
          </Typography>
          <Typography variant='h6' sx={{color:'red'}}>
            Email Address: tarajef120@gmail.com
          </Typography>
        
    </Container>
  )
}

export default About