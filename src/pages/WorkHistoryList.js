import React from 'react'
import Work from '../components/work'
import data from '../components/workHistory'
import { Typography, Box } from '@mui/material'

export default function Technical() {

    const workHistory = data.map(work => 
        <Work
        key={work.id}
        {...work}
        />
        )
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', background: 'linear-gradient(50deg, #0a2934 , #97a1b0 60%)' }}>
            <Box sx={{ color: '#d5d9e4' }}>
                <Typography variant='h6'>
                    <u>Work History</u>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}>
                <Box sx={{ mb: '15px', color: '#d5d9e4' }}>
                    <Typography variant="h5">
                        United States Army
                    </Typography>
                </Box>
                <Box sx={{ width: '90%', color: '#1f3a51' }}>
                    {workHistory}
                </Box>
            </Box>
        </Box>
    )
}