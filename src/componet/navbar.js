import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  
    return (
    <AppBar position='statick' sx={{backgroundColor:'#fff', borderBottom:'1px solid #ddd', width:'87vw', marginLeft:'5rem'}}>
        <Toolbar>
           <Typography variant='h6' sx={{flexGrow:'1', color:'primary.main'}}>Portfolio</Typography>
           <Box sx={{display:'flex',
               gap:6,
               padding:2,
           }}>
              <NavLink to='/about' style={{textDecoration:'none', color:'gray'}}>About</NavLink>
              <NavLink to='/projects' style={{textDecoration:'none', color:'gray'}}>Projects</NavLink>
              <NavLink to='/skills' style={{textDecoration:'none', color:'gray'}}>Skills</NavLink>
              <NavLink to='/contact' style={{textDecoration:'none', color:'gray'}}>Contact</NavLink>
           </Box>
           
        </Toolbar>
     </AppBar>
  )
}

export default Navbar