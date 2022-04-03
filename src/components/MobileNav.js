import React, { useState } from 'react';
import { Box, Menu, MenuItem, Fade, Link, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export default function MobileNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        left: '0rem',
        top: '2rem',
        textAlign: 'left',
        width: '100%',
      }}
    >
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="primary"
        size="300px"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem component={Link} href="#home" onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem component={Link} href="#about" onClick={handleClose}>
          About
        </MenuItem>
        <MenuItem component={Link} href="#portfolio" onClick={handleClose}>
          Portfolio
        </MenuItem>
        <MenuItem component={Link} href="#technical" onClick={handleClose}>
          Technical & Education
        </MenuItem>
      </Menu>
    </Box>
  );
}
