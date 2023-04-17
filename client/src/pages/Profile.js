import React from 'react';
import Typography from '@mui/material/Typography';

function Profile(props) {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        color="secondary.main"
        gutterBottom
        sx={{
          fontFamily: 'Metal Mania, cursive',
        }}
      >
        User Profile
      </Typography>
      <Typography
        variant="h5"
        component="h3"
        align="center"
        color="yellow"
        gutterBottom
        sx={{
          fontFamily: 'Metal Mania, cursive',
        }}
      >
        Your Username: {user.username || 'N/A'}
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        align="center"
        color="yellow"
        gutterBottom
        sx={{
          fontFamily: 'Metal Mania, cursive',
        }}
      >
        Your Email: {user.email || 'N/A'}
      </Typography>
    </div>
  );
}

export default Profile;
