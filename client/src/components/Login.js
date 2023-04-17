import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AUTH_TOKEN } from '../constants';
import Auth from '../utils/auth';

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    username: '',
  });

  const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
      $email: String!
      $password: String!
      $username: String!
    ) {
      addUser(username: $username, email: $email, password: $password) {
        token
        user {
          username
          email
        }
      }
    }
  `;

  const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          username
          email
        }
      }
    }
  `;

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      username: formState.username,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ addUser }) => {
      // Auth.addUser(addUser.token);
      // console.log(addUser.token);
      localStorage.setItem(AUTH_TOKEN, addUser.token);
      localStorage.setItem('user', JSON.stringify(addUser.user));
      navigate('/Home');
    },
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      localStorage.setItem('user', JSON.stringify(login.user));
      navigate('/Home');
    },
  });

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" py={3}>
        <Typography
          variant="h4"
          color="secondary"
          sx={{
            fontFamily: 'Metal Mania, cursive',
          }}
        >
          {formState.login ? 'Login' : 'Sign Up'}
        </Typography>
        <br />
        <Grid container direction="column" alignItems="center" spacing={2}>
          {!formState.login && (
            <Grid item>
              <TextField
                value={formState.username}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    username: e.target.value,
                  })
                }
                type="text"
                placeholder=" Type your username"
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
              placeholder="Type your password"
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
              color="secondary"
              sx={{
                fontFamily: 'Metal Mania, cursive',
              }}
              onClick={formState.login ? login : signup}
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
