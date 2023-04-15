import React from 'react';
import Post from './Post';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function PostList(postData) {
  const { postText, postAuthor, createdAt, comments } = postData;

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
    }}>
      {/* postText, postAuthor, createdAt, comments */}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" paragraph>
          {postData.postText}lorem ipsom sit amet, consectetur adipiscing elit in id
        </Typography>
        <Typography variant="h5" component="div" paragraph>
          {postData.postAuthor}david attunbutofh
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" paragraph>
          {postData.createdAt} 69/68.79
        </Typography>
        <Typography variant="body2">
          {postData.comments}
        </Typography>
      </CardContent>
      {/* COMMENTS AND ALL THAT */}
    </Card>
  );
}

export default PostList;