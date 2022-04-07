import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Education(props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: '20px' }}>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ color: '#242626', fontWeight: 'bold' }}
        >
          <em>{props.title}</em>
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">{props.date}</Typography>
      </Box>
      <Box>
        <Typography sx={{ mt: '10px', mb: '10px' }}>{props.course}</Typography>
      </Box>
      <Box>
        <img className="school-icons" src={props.img} alt={props.title} />
      </Box>
    </Box>
  );
}
