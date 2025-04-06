import { Button, Card, CardContent, Container, Grid, Typography, CardMedia, Box } from '@mui/material'
import React from 'react'
import screen1 from '../Screenshot (2).png'
import screen2 from '../Screenshot (3).png'
import screen3 from '../Screenshot (4).png'
import screen4 from '../Screenshot (5).png'

function Projects() {
  
  const Projects = [
    {title:'project 1',
      description:'سایت فروش پیتزا',
      link:'https://github.com/tara970/my-fast-food',
      image: screen1 
    },{
      title:'project 2',
      description:'سایت فروشگاه کوچک',
      link:'https://github.com/tara970/my-shoping',
      image: screen2
    },{
      title:'project 3',
      description:'سایت عکس',
      link:'https://github.com/tara970/photo-gallery-site',
      image: screen3
    },{
      title:'project 4',
      description:'باکس یوزرنیم جذاب',
      link:'https://github.com/tara970/username',
      image: screen4
    }
  ]
  
  return (
    <Container sx={{mt: 2}}>
      <Grid container spacing={3}>
        {
          Projects.map((project)=>(
            <Grid item xs={12} sm={6} md={6} key={project.title}>
              <Card sx={{p: 2, boxShadow:'0px 3px 9px #0D47A1' }}>
                <CardMedia component='img' image={project.image} height='150px' sx={{borderRadius:'15px', width:'37vw', marginLeft:'10px'}}/>
                <CardContent>
                  <Typography variant='h6' sx={{color:'#0D47A1'}}>{project.title}</Typography>
                 <Box sx={{display: 'flex', justifyContent:'space-between' }}>
                 <Typography variant='body2' color='text.secondary' sx={{fontWeight:'bold'}}>{project.description}</Typography>
                 <Button variant='contained' size='small' href={project.link} sx={{bottom:'15px', backgroundColor:'#0D47A1'}}>show</Button>
                 </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default Projects