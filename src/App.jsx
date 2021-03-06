import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Routes, Route } from 'react-router-dom'
import { Paper, StylesProvider } from '@material-ui/core'
import { CssBaseline } from '@mui/material'

import MainAppBar from './components/MainAppbar'
import { lightTheme, darkTheme } from './components/Theme'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'

export default function App() {

  const [darkMode, setDarkMode] = useState(false)

  const theme = (darkMode ? darkTheme : lightTheme)

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper style={{height: '100vh', width: '100%', borderRadius: '0'}}>
          <MainAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
            <Routes>
              <Route path='/keeb-portfolio' element={<Home />} />
              <Route path='/keeb-portfolio/about' element={<About />} />
            </Routes>
            <Footer />
        </Paper>
      </ThemeProvider>
    </StylesProvider>
  )
}
