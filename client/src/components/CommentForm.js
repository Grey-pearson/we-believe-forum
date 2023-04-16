import React, { useState } from 'react';
import { Card, TextField, Button } from '@mui/material';
import { useTheme, colors, CardActions } from '@mui/material';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import { QUERY_POSTS, QUERY_SINGLE_POST } from '../utils/queries';
import AuthService from '../utils/auth';



const CommentForm = (post_id) => {
    const theme = useTheme(); // need???

    const [commentText, setCommentText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);


    //fix
    const [addComment, { error }] = useMutation(ADD_COMMENT, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });

                cache.writeQuery({
                    query: QUERY_SINGLE_POST,
                    data: { comments: [addPost, ...posts] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addComment({
                variables: { // add comment updated variables
                    postId: post_id,
                    commentText,
                    commentAuthor: AuthService.getProfile().data.username,
                },
            });

            setCommentText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'commentText' && value.length <= 280) {
            setCommentText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            <br />



            <form
            // onSubmit={handleFormSubmit}
            >
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
                    <Button variant="contained" type="submit" sx={{
                        bgcolor: 'secondary.main',
                        color: 'black',
                        m: 2,
                        '&:hover': {
                            bgcolor: 'secondary.main',
                        }
                    }}>Create Comment</Button>
                    <p
                        className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                            }`}
                    >
                        {characterCount}/280
                    </p>
                </CardActions>
                {error && (
                    <div>
                        {error.message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default CommentForm;;
