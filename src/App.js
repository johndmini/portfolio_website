import React from 'react';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import WorkHistory from './pages/WorkHistoryList';
import Skills from './pages/TechnicalSkills';
import EducationHistory from './pages/Education';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './components/styles';
import './index.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box>
          <Box
            sx={{
              position: 'sticky',
              top: '1rem',
              display: {
                mobile: 'none',
                tablet: 'block',
                desktop: 'block',
              },
            }}
          >
            <Nav />
          </Box>
          <Box
            sx={{
              position: 'sticky',
              top: '2rem',
              left: '2rem',
              display: {
                tablet: 'none',
              },
            }}
          >
            <MobileNav />
          </Box>
        </Box>
        <Home />
        <About />
        <Portfolio />
        <WorkHistory />
        <Skills />
        <EducationHistory />
      </Box>
    </ThemeProvider>
  );
}
