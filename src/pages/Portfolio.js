import React from 'react';
import portfolioData from '../components/PortfolioData';
import { Typography, Box, Button } from '@mui/material';

export default function Portfolio() {
  const projects = portfolioData.map((project) => (
    <Box
      sx={{
        display: 'inline-block',
        border: '1px solid teal',
        padding: '5px',
        m: '10px',
      }}
      key={project.id}
    >
      <Box>
        <Typography >
          <Box>
            <img className="project-images" src={project.img} alt="" />
          </Box>
          <Typography sx={{ width: '200px', ml: '50px' }} variant="subtitle2">
            {project.description}
          </Typography>
          <Box sx={{ m: '5px' }}>
            <Button target="_blank" href={project.deployed} variant="outlined">
              {project.title}
            </Button>
          </Box>
          <Box>
            <Button target="_blank" href={project.github} variant="outlined">
              GitHub
            </Button>
          </Box>
        </Typography>
      </Box>
    </Box>
  ));

  return (
    <Box sx={{ textAlign: 'center', m: '20px' }} id="portfolio">
      <Box>
        <Typography variant="h6" color="gray">
          Check out my projects!
        </Typography>
      </Box>
      {projects}
    </Box>
  );
}
