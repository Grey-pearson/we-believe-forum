import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS } from '../utils/queries';

import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';

import AuthService from '../utils/auth';

const PostForm = () => {
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
        <Card variant="outlined" sx={{
            width: 300,
            minHeight: 100,
            backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            },
            margin: 'auto',
            padding: '1rem',
            borderRadius: '10px',
        }}>
            <h3>Create your master peice of a theory here</h3>


            <>
                <p
                    className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                        }`}
                >
                    Character Count: {characterCount}/280
                </p>
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    onSubmit={handleFormSubmit}
                >
                    <div>
                        <textarea
                            name="thoughtText"
                            placeholder="Here's a new thought..."
                            value={postText}
                            className="form-input w-100"

                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="col-12 col-lg-3">
                        <button className="btn btn-primary btn-block py-3" type="submit">
                            Add Thought
                        </button>
                    </div>
                    {error && (
                        <div className="col-12 my-3 bg-danger text-white p-3">
                            {error.message}
                        </div>
                    )}
                </form>
            </>

        </Card >
    );
};

export default PostForm;;
