import React from 'react';
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

function Post(props) {
  const { postText, postAuthor, createdAt, comments } = props

  return (
    <Card variant="outlined" sx={{
      width: 300,
      minHeight: 100,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}>
      {/* postText, postAuthor, createdAt, comments */}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" paragraph>
          {props.postText}
        </Typography>
        <Typography variant="h5" component="div" paragraph>
          {props.postAuthor}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" paragraph>
          {props.createdAt}
        </Typography>
        <Typography variant="body2">
          {props.comments}
        </Typography>
      </CardContent>

      {/* the issue probably */}
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions> */}

    </Card>
  );
}

export default Post;
