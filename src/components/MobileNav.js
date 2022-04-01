import React, { useState } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { AppBar, Box, Toolbar, IconButton } from '@mui/material';

export default function MobileNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    window.location = href;
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        ml: 'auto',
        mr: 'auto',
        left: '0',
        right: '0',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <AppBar
        sx={{
          width: '100px',
          height: '50px',
          top: '8px',
          right: '10px',
          borderRadius: '10px',
        }}
      >
        <Toolbar>
          <IconButton
            id="positioned-button"
            aria-controls={open ? 'positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="posittioned-menu"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem href="#home" onClick={handleClose}>
              HOME
            </MenuItem>
            <MenuItem href="#about" onClick={handleClose}>
              ABOUT
            </MenuItem>
            <MenuItem href="#portfolio" onClick={handleClose}>
              PORTFOLIO
            </MenuItem>
            <MenuItem href="#technical" onClick={handleClose}>
              TECHNICAL & EDUCATION
            </MenuItem>
            <MenuItem>RECOMMENDATION</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
