import React from 'react';
import Post from './Post';
import CommentForm from './CommentForm';
import { Card, Button, CardContent, Typography, CardActions, } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Routes, Route, Outlet, Link } from "react-router-dom";

function PostList(postData) {
  const { postText, postAuthor, createdAt, comments } = postData;

  const [stateShowForm, setStateShowForm] = React.useState(false);
  const showForm = () => {
    setStateShowForm(true);
  }

  return (
    <Card variant="outlined" sx={{
      width: 300,
      minHeight: 100,
      margin: 'auto',
      padding: '0 1rem',
      borderRadius: '10px',
      bgcolor: 'primary.main',
      marginTop: '10px',

    }}>
      {/* postText, postAuthor, createdAt, comments */}
      <CardContent>
        <Typography variant="subtitle1" >
          {postData.postText}lorem ipsom sit amet, consectetur adipiscing elit in id
        </Typography>


        <Typography variant="body2">
          {postData.comments}
        </Typography>
      </CardContent>

      <CardActions>
        <Typography variant="subtitle2" paragraph sx={{ margin: '0', }}>
          {postData.postAuthor}david attunbutofh
        </Typography>
        <Typography variant="subtitle2" paragraph sx={{ margin: '0', }}>
          {postData.createdAt} 69/68.79
        </Typography>
        <Button size="small" variant="contained" onClick={showForm} sx={{
          bgcolor: 'secondary.main',
          color: 'black',
          marginLeft: '10px'

        }}>
          Comment
        </Button>

      </CardActions>
      {/* COMMENTS AND ALL THAT */}
      {stateShowForm && <CommentForm postId={postData._id} />}
    </Card>
  );
}

export default PostList;