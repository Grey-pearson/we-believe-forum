import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useApolloClient } from '@apollo/client';

function Nav(props) {
  const { currentTab, setCurrentTab } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    //Remove token from Apollo client
    try {
      await apolloClient.resetStore();
    } catch (err) {
      console.log('Error resetting Apollo store', err);
    }
    navigate('/Login');
  };

  return (
    <nav className="nav-container">
      <Typography
        variant="h1"
        component="h2"
        align="center"
        color="primary"
        mt="40px"
        gutterBottom
        sx={{
          fontFamily: 'Nosifer, cursive',
        }}
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
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  fontFamily: 'Metal Mania, cursive',
                  fontSize: '40px',
                  color: 'yellow',
                }}
              >
                <Link
                  to="/Home"
                  activeClassName="active-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  HOME
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: 'Metal Mania, cursive',
                  fontSize: '40px',
                  color: 'yellow',
                }}
              >
                <Link
                  to="/Profile"
                  activeClassName="active-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  PROFILE
                </Link>
              </Button>
            </li>
            <li>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: 'Metal Mania, cursive',
                  fontSize: '40px',
                  color: 'yellow',
                }}
              >
                <Link
                  to="/Login"
                  activeClassName="active-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  LOG IN
                </Link>
              </Button>
            </li>
            <li>
              <Button
                onClick={handleSignOut}
                variant="outlined"
                sx={{
                  fontFamily: 'Metal Mania, cursive',
                  fontSize: '40px',
                  color: 'yellow',
                }}
              >
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
