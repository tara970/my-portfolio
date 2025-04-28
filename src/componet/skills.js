import { Box, Container, LinearProgress, Typography } from '@mui/material';
import React from 'react'

function Skills() {
  
  const skills = [
    {name:'javascript', level: 60},
    {name:'react' , level: 70},
    {name:'bootstrap' , level: 40},
    {name:'sass' , level: 40},
    {name:'next' , level: 30},
    {name:'material ui' , level: 50},
    {name:'css' , level: 70},
    {name:'context api & redax' , level: 50},
    {name:'tailwind' , level: 35}
  ];
  
  return (
    <Container sx={{ marginTop: '30px' }}>
    <Typography variant="h3" sx={{ color: '#0D47A1', mb: 3 }}>SKILLS</Typography>
    {
      skills.map((skill, index) => (
        <Box
          key={index}
          sx={{
            padding: 2,
            borderRadius: 2,
            boxShadow: '0px 2px 10px #0D47A1',
            marginBottom: '20px',
            backgroundColor: '#f9f9f9'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="subtitle1" sx={{ color: 'purple' }}>{skill.name}</Typography>
            <Typography variant="subtitle2" sx={{ color: '#333' }}>{skill.level}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={skill.level}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: 'rgb(211, 211, 211)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'purple',
              }
            }}
          />
        </Box>
      ))
    }
  </Container>
  
  )
}

export default Skills