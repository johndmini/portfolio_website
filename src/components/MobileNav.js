import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';

export default function MobileNav() {
  return (
    <Box
      sx={{
        position: 'absolute',
        ml: 'auto',
        mr: 'auto',
        left: '0',
        right: '0',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <AppBar
        sx={{
          width: '350px',
          height: '50px',
          top: '8px',
          right: '10px',
          borderRadius: '10px',
        }}
      >
        <Toolbar>
          <Button href='#home' color="inherit">Home</Button>
          <Button href='#about' color="inherit">About</Button>
          <Button href='#portfolio' color="inherit">Portfolio</Button>
          <Button href='#technical' color="inherit">Technical</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
