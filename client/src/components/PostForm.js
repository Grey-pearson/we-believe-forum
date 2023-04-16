import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS } from '../utils/queries';

import { Card, TextField, Button } from '@mui/material';
import { useTheme, colors, CardActions } from '@mui/material';

import AuthService from '../utils/auth';

const PostForm = () => {
  const theme = useTheme();

  const [postText, setPostText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { thoughts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: AuthService.getProfile().data.username,
        },
      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
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
      <h3>Create your masterpiece of a theory here</h3>

      <>
        <form onSubmit={handleFormSubmit}>
          <div>
            <TextField
              variant="outlined"
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={4}
              focused
              defaultValue={'text here'}
              sx={{
                backgroundColor: 'primary.light',
                borderRadius: '10px',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </div>

          <CardActions disableSpacing>
            <Button
              variant="outlined"
              type="submit"
              sx={{ bgcolor: 'secondary.main', color: 'black', m: 2 }}
            >
              Add Thought
            </Button>
            <p
              className={`m-0 ${
                characterCount === 280 || error ? 'text-danger' : ''
              }`}
            >
              {characterCount}/280
            </p>
          </CardActions>
          {error && <div>{error.message}</div>}
        </form>
      </>
    </Card>
  );
};

export default PostForm;
