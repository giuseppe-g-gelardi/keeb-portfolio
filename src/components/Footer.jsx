import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import './styles/Footer.css'

export default function Footer() {
  return (
    
      <AppBar className='footer' position="static" color="transparent">
        <Container className='container' maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              &copy; 2021 Giuseppe Gelardi
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}
