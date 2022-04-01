import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Skill(props) {
  return (
    <Box sx={{ display: 'inline-block', mr: '40px' }}>
      <Box>
        <Typography variant="h6">{props.title}</Typography>
      </Box>
      <Box>
        <img
          className="tech-icons"
          src={`${props.img}`}
          alt={`${props.title}`}
        />
      </Box>
    </Box>
  );
}
