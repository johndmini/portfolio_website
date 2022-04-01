import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Work(props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ color: 'black', fontWeight: 'bold' }}
        >
          {props.title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">{props.date}</Typography>
        <Typography variant="subtitle2">{props.location}</Typography>
      </Box>
      <Box sx={{ mt: '10px', mb: '10px' }}>
        <Typography variant="body2">{props.description}</Typography>
      </Box>
    </Box>
  );
}
