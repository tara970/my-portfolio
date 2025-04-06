import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container sx={{ mt: 10 }}>
     <Box sx={{textAlign:'center'}}>
     <Typography variant="h2" color="primary">
      ✨Welcome to my portfolio 
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'text.secondary', marginTop:'50px' }}>
      😊I'm Tara, a front-end developer. Here you can learn about my projects, skills, and how to contact me.
      </Typography>
     </Box>
    </Container>
  );
}

export default Home;