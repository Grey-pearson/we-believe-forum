import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS } from '../utils/queries';
import { useNavigate } from 'react-router-dom';

import { Card, TextField, Button, Typography } from '@mui/material';
import { useTheme, colors, CardActions } from '@mui/material';
import Box from '@mui/material/Box';

import AuthService from '../utils/auth';
import { AUTH_TOKEN } from '../constants';

const PostForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [postText, setPostText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  // const [addPost, { error }] = useMutation(ADD_POST, {
  //   update(cache, { data: { addPost } }) {
  //     try {
  //       const { posts } = cache.readQuery({ query: QUERY_POSTS });

  //       cache.writeQuery({
  //         query: QUERY_POSTS,
  //         data: { posts: [addPost, ...posts] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  // const user = localStorage.getItem('user')
  // console.log(user)

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(AuthService.getProfile().data.username)

  //   try {

  //     const { data } = await addPost({
  //       variables: {
  //         postText,
  //         postAuthor: user.username,
  //       },
  //     });

  //     setPostText('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const postText = '';

  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(localStorage.getItem('user'));
  // console.log(user);

  const [addPost] = useMutation(ADD_POST, {
    variables: {
      postText: setPostText.postText,
      postAuthor: user.username,
    },
    onCompleted: ({ addPost }) => {

      navigate('/Home');
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostText(value);
    console.log(postText);
    setCharacterCount(value.length);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: 300,
        minHeight: 100,

        margin: 'auto',
        padding: '1rem',
        borderRadius: '10px',
        bgcolor: 'primary.main',
      }}
    >
      <Typography
        align="center"
        sx={{
          fontFamily: 'Metal Mania, cursive',
          fontSize: '25px',
        }}
      >
        Create your masterpiece of a theory here
      </Typography>
      <>
        <form onSubmit={addPost}>
          <div>
            <TextField
              name="post"
              variant="outlined"
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={4}
              focused
              itemID="textField"
              onChange={handleChange}
              // value={TextFieldValue}
              placeholder={'text here'}
              sx={{
                backgroundColor: 'primary.light',
                align: 'center',
                borderRadius: '10px',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            ></TextField>
          </div>

          <CardActions disableSpacing>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                // onClick={addPost}
                type="submit"
                sx={{ bgcolor: 'secondary.main', color: 'black', m: 2 }}
              >
                Create Post
              </Button>
            </Box>
            <p
              className={`m-0 ${characterCount === 280 || 'error' ? 'text-danger' : ''
                }`}
            >
              {characterCount}/280
            </p>
          </CardActions>
          {/* {error && <div>{error.message}</div>} */}
        </form>
      </>
    </Card>
  );
};

export default PostForm;
