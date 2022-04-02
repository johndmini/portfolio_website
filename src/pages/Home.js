import React from 'react';
import { theme } from '../components/styles';
import {
  Box,
  Typography,
  IconButton,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { LinkedIn, GitHub, ExpandCircleDownTwoTone } from '@mui/icons-material';

const fontSize = createTheme();

fontSize.typography.h2 = {
  fontSize: '3.5rem',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem,',
  },
  [theme.breakpoints.down('tablet')]: {
      fontSize: '1.5rem',
  }
};

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
          <ThemeProvider theme={fontSize}>
            <Box>
              <Typography variant="h2">JOHN DAVID DELGADO</Typography>
            </Box>
          </ThemeProvider>
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
                tablet: 'none',
                laptop: 'block',
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
