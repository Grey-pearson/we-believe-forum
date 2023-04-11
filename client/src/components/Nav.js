import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

function Nav(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <nav className="nav-container">
      <Typography
        variant="h4"
        component="h2"
        justifyContent="left"
        gutterBottom
      >
        The We Believe Blog
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'right', padding: '20px' }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <li>
            <Button variant="outlined" color="primary">
              <NavLink to="/Home" activeClassName="active-link">
                HOME
              </NavLink>
            </Button>
          </li>
          <li>
            <Button variant="outlined" color="primary">
              <NavLink to="/Profile" activeClassName="active-link">
                PROFILE
              </NavLink>
            </Button>
          </li>
          <li>
            <Button variant="outlined" color="primary">
              CREATE POST
            </Button>
          </li>
          <li>
            <Button variant="outlined" color="primary">
              SIGN OUT
            </Button>
          </li>
        </Stack>
      </Box>
    </nav>
  );
}

export default Nav;
