import React from 'react';
import Work from '../components/WorkTemplate';
import data from '../components/WorkHistoryData';
import { Typography, Box } from '@mui/material';

export default function WorkHistory() {
  const workHistory = data.map((work) => <Work key={work.id} {...work} />);
  return (
    <Box
      id="technical"
      sx={{ display: 'flex', justifyContent: 'center', background: '#206c83' }}
    >
      <Box sx={{ color: '#d5d9e4', mt: '50px' }}>
        <Typography variant="h6">
          <u>Work History</u>
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          mt: '50px',
        }}
      >
        <Box sx={{ width: '90%', color: '#d8ebe8' }}>{workHistory}</Box>
      </Box>
    </Box>
  );
}
