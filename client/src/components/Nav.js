import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

function Nav(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <nav sx={{
      width: 300,
      minHeight: 100,

      margin: 'auto',
      padding: '1rem',
      borderRadius: '10px',
      bgcolor: 'primary.main'

    }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        color="primary"
        mt="40px"
        gutterBottom
      >
        The We Believe Blog
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <Typography color="primary">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <li>
              <Button variant="outlined" color="primary">
                <Link to="/Home" activeClassName="active-link">
                  HOME
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outlined" color="primary">
                <Link to="/Profile" activeClassName="active-link">
                  PROFILE
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outlined" color="primary">
                <Link to="/CreatePost" activeClassName="active-link">
                  CREATE POST
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outlined" color="primary">
                <Link to="/Login" activeClassName="active-link">
                  LOG IN
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="outlined" color="primary">
                SIGN OUT
              </Button>
            </li>
          </Stack>
        </Typography>
      </Box>
    </nav>
  );
}

export default Nav;
