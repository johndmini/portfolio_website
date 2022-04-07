import React from 'react';
import { Typography, Box, ThemeProvider } from '@mui/material';
import { theme } from '../components/styles';

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        id="about"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2B2B2B',
          padding: '50px',
          color: '#7A7A7A',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            marginRight: '80px',
            display: {
              mobile: 'none',
              tablet: 'block',
              laptop: 'block',
              desktop: 'block',
            },
          }}
        >
          <img className="profile-pic" src="./images/profile.jpg" alt="" />
          <Typography variant="h5" color="white">
            Contact Details
          </Typography>
          <Typography variant="p">johndavid.p.delgado@gmail.com</Typography>
        </Box>
        <Box
          sx={{
            width: {
              mobile: '100%',
              tablet: '80%',
              laptop: '60%',
              desktop: '50%',
            },
            lineHeight: '30px',
          }}
        >
          <Typography variant="h5" color="white">
            About Me
          </Typography>
          <Typography variant="p">
            I am a 10 year Army Veteran with a passion for creating and problem solving. I will always be a nerd at heart and will never be bored with technology. Learning something new every day is my way to be motivated and stay motivated. My new found passion for Software Development has awaken the child in me to keep exploring and finding joy in the big and little things that new challenges has to offer. I am a self-motivated, and self-driven individual who is always looking for new challenges and new ways to solve problems.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
