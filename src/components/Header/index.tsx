import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import './styles.scss';

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TikTuk;)
          </Typography>
          <Link to="/feed" className="link">
            Feed
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
