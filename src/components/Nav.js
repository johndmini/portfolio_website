import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

export default function Nav() {
  return (
    <Box
      sx={{
        position: 'absolute',
        ml: 'auto',
        mr: 'auto',
        top: '1rem',
        left: '0',
        right: '0',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <ButtonGroup variant="contained" sx={{ width: '668px', height: '37px' }}>
        <Button href="#home">HOME</Button>
        <Button href="#about">ABOUT</Button>
        <Button href="#portfolio">PORTFOLIO</Button>
        <Button href="#technical">TECHNICAL & EDUCATION</Button>
        <Button disabled>RECOMMENDATION</Button>
      </ButtonGroup>
    </Box>
  );
}
