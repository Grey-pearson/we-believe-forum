import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { gql, useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: '',
  });

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" py={3}>
        <Typography variant="h4" color="primary">
          {formState.login ? 'Login' : 'Sign Up'}
        </Typography>
        <br />
        <Grid container direction="column" alignItems="center" spacing={2}>
          {!formState.login && (
            <Grid item>
              <TextField
                value={formState.name}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value,
                  })
                }
                type="text"
                placeholder="Your name"
                inputProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  style: { color: 'gray' },
                }}
              />
            </Grid>
          )}
          <Grid item>
            <TextField
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
              type="text"
              placeholder="Type email address"
              inputProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'gray' },
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              value={formState.password}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  password: e.target.value,
                })
              }
              type="password"
              placeholder="Choose a password"
              inputProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'gray' },
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => console.log('onClick')}
            >
              {formState.login ? 'login' : 'create account'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              onClick={(e) =>
                setFormState({
                  ...formState,
                  login: !formState.login,
                })
              }
            >
              {formState.login
                ? 'need to create an account?'
                : 'already have an account?'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
