import React from 'react'
import { Typography, Box, Button } from '@mui/material'

export default function Portfolio() {
    return(
        <Box sx={{ textAlign:'center', m: '20px' }} id="portfolio">
            <Box>
                <Typography variant='h6' color= 'gray'>
                    Check out some of my Projects
                </Typography>
            </Box>
            <Box sx={{ display: 'inline-block', border: '1px solid teal', padding: '5px' }}>
                <Box>
                    <Typography>
                        <Box >
                            <img className='project-images' src='./images/CryptoCurrencyTracker.png' alt=''/>
                        </Box>
                        <Box sx={{ m: '5px' }}>
                            <Button target='_blank' href='https://johndcryptotracker.netlify.app/' variant='outlined'>
                                Crypto Currency Tracker
                            </Button>
                        </Box>
                        <Box>
                            <Button target='_blank' href='https://github.com/johndmini/crypto_currency_tracker' variant='outlined'>
                                GitHub
                            </Button>
                        </Box>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}