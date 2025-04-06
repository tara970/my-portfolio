import { Button, Container, TextField, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {
  
  const [formData,setFormData] = useState({name:'', email:'', message:''});

  const handleChange = (e) =>
  {
      const {name , value} = e.target;
      setFormData({...formData, [name]: value});
  }
    
  const handleSubmit = (e) =>
  {
      e.preventDefault();
      emailjs.sendForm('service_hkcensb','template_e41b5ke', e.target, '2Zy9ImbNVLSH7VcpG').then((result)=>{
        alert('The message was sent')
      },(error)=>{
        console.log(error);
        
        alert('There was a problem sending the message.')
      }
      )
  }
  
  return (
    <Container sx={{ marginTop: "5rem", textAlign: "center" }}>
      
      <Typography variant="h4" sx={{ marginBottom: "10px", color:'#0D47A1', fontWeight:'bold' }}>
       Call To Me
      </Typography>

      <form onSubmit={handleSubmit}>
      <TextField label="Name" fullWidth margin="normal"  name='name'
          value={formData.name}
          onChange={handleChange}/>
      <TextField label="Email" fullWidth margin="normal"  name='email'
          value={formData.email}
          onChange={handleChange}/>
      <TextField label="Message" fullWidth multiline rows={4} margin="normal"  name='message'
          value={formData.message}
          onChange={handleChange}/>

      
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button variant="contained" type="submit" size="large" sx={{backgroundColor:'#0D47A1'}}>Send</Button>
      </Box>
      </form>
    </Container>
  );
}

export default Contact;
