import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MuiSwitch from './MuiSwitch.jsx'

export default function MainAppBar({ check, change }) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={5} color='transparent'>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Hello
          </Typography>
          
          {/* dark mode toggle switch */}
          <MuiSwitch onChange={change} checked={check} />
          {/* dark mode toggle */}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
