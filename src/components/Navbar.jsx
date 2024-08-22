import { Box, AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <Box sx={{ flexGrow: 1, zIndex: 2000 }}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleSidebar}
              >
                <MenuRoundedIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                PrepSecure
              </Typography>

              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PM0mzTPpQEKi80Hf8JrJE4HL3HZAswWOFA&s" />
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;
