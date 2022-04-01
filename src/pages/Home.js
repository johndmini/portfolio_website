import React from 'react';

import { theme } from '../components/styles';

import { Box, Typography, IconButton, ThemeProvider } from '@mui/material';
import { LinkedIn, GitHub, ExpandCircleDownTwoTone } from '@mui/icons-material';

const iconButtonStyle = {
  color: 'white',
  fontSize: '50px',
  ':hover': { color: 'teal' },
};
const boxStyle = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const typographyStyle = { mt: '10px', mb: '40px' };

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="nav-container" id="home">
        <Box sx={boxStyle}>
          <Typography variant="h2">JOHN DAVID DELGADO</Typography>
          <Typography variant="p" lineHeight="1.9em" sx={typographyStyle}>
            SOFTWARE ENGINEER
          </Typography>
          <Box>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/johndavid-p-delgado/"
            >
              <LinkedIn sx={iconButtonStyle} />
            </IconButton>
            <IconButton target="_blank" href="https://github.com/johndmini">
              <GitHub sx={iconButtonStyle} />
            </IconButton>
          </Box>
          <IconButton
            href="#about"
            sx={{
              position: 'absolute',
              bottom: '2rem',
              display: {
                mobile: 'none',
                tablet: 'block',
                desktop: 'block',
              },
            }}
          >
            <ExpandCircleDownTwoTone sx={iconButtonStyle} />
          </IconButton>
        </Box>
      </div>
    </ThemeProvider>
  );
}
