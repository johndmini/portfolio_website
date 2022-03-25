import React from 'react'
import { Typography, Box } from '@mui/material'

export default function About() {
    return(
        <Box id="about" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2B2B2B', padding: '50px', color: '#7A7A7A'}}>
            <Box sx={{ textAlign: 'center', marginRight: '80px' }}>
                <img className='profile-pic' src='./profile.jpg' alt=''/>
                <Typography variant='h5' color='white'>Contact Details</Typography>
                <Typography variant='p'>johndavid.p.delgado@gmail.com</Typography>
            </Box>
            <Box sx={{ width: '50%', lineHeight: '30px'}}>
                <Typography variant='h5' color='white'>About Me</Typography>
                <Typography variant='p'>
                    "Seize the day and make your lives extra ordinary". A guideline I live by through every waking moment to start my day. It is my staple point on how my day is going to be and how my week is going to turn out.
                    <br />
                    <br />
                    I am a 10 year Army Veteran with extensive experience in the Information Systems and Information Security working on Network Systems, Network Operations, Communication Security and Security Compliance. I'm currently pursuing a career in Software Development to apply my creative and critical thinking skills to solve complex problems to develop software applications to improve organization efficiency.
                    <br />
                    <br />
                    During my tenure in the Army I've learned several things about myself, but the one thing that keeps me driving forward is my perseverance to succeed especially during the low points and the failure points in my life. As an aspiring Software Developer, my skillset fell right into place and felt at home immediately with the complexity of Software Development and the process it takes to <strong><em>CREATE.</em></strong>
                    <br />
                    <br />
                    Despite the hard learning and the struggles of trouble shooting, my experience in the Army has helped me to be composed and to be confident that I will utilize my Critical, and Creative Thinking abilities to find the best solution to a problem. With my experience in software development, I find the greatest reward is the smile and joy behind the screen, watching my project work the way I intended to. The struggles and frustrations that came with it, earns a share with that reward.
                </Typography>
            </Box>
        </Box>
    )
}