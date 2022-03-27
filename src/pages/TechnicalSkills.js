import React from 'react'
import skillsData from '../components/SkillsListData'
import Skill from '../components/SkillTemplate'
import { Typography, Box } from '@mui/material'

export default function Skills() {

    const TechnicalSkills = skillsData.map(skill => 
        <Skill 
            key={skill.id}
            {...skill}
        />
        )
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center' ,background: '#206c83' }}>
            <Box sx={{ color: '#d5d9e4', mt: '50px' }}>
                <Typography variant='h6'>
                    <u>Technical Skills</u>
                </Typography>
            </Box>
            <Box sx={{ textAlign:'center', width: '50%', mt: '50px', mb: '50px', color: '#d5d9e4' }}>
                {TechnicalSkills}
            </Box>
        </Box>
    )
}