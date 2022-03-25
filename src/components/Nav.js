import React from 'react'
import { Button, ButtonGroup } from '@mui/material'

export default function Nav() {
    return(
        <ButtonGroup variant="contained" id='nav'>
            <Button href='#home'>HOME</Button>
            <Button href='#about'>ABOUT</Button>
            <Button>PORTFOLIO</Button>
            <Button>TECHNICAL & EDUCATION</Button>
            <Button>RECOMMENDATION</Button>
        </ButtonGroup>
    )
}
