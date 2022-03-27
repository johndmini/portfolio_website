import React from 'react'
import Education from '../components/EducationTemplate'
import educationData from '../components/EducationData'
import { Typography, Box } from '@mui/material'

export default function EducationHistory() {

    const educationHistory = educationData.map(school => 
        <Education 
            key={school.id}
            {...school}
        />
        )
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', background: '#206c83' }}>
            <Box sx={{ color: '#d5d9e4',  mt: '50px' }}>
                <Typography variant='h6'>
                    <u>Education</u>
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', mt: '50px' }}>
                <Box sx={{ width: '90%', color: '#1f3a51', mb: '50px' }}>
                    {educationHistory}
                </Box>
            </Box>
        </Box>
    )
}
