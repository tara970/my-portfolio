import React from 'react'
import '../src/App.css'
import Navbar from './componet/navbar'
import About from './componet/about'
import Projects from './componet/projects'
import Skills from './componet/skills'
import Contact from './componet/contact'
import Home from './componet/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0D47A1', 
    },
    background: {
      default: '#f9f9f9', 
      paper: '#ffffff',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    
    </ThemeProvider>
  )
}

export default App