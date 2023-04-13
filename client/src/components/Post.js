import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';

const divStyle = {
  color: 'blue',
  backgroundcolor: 'purple',
};

function Post(props) {
  const { postText, postAuthor, createdAt, comments } = props

  return (
    <Box sx={{ minWidth: 275 }} className={divStyle}>
      <Card variant="outlined">
        <div variant="outlined" className="post">
          {/* postText, postAuthor, createdAt, comments */}

          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.postText}
            </Typography>
            <Typography variant="h5" component="div">
              {props.postAuthor}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.createdAt}
            </Typography>
            <Typography variant="body2">
              {props.comments}
            </Typography>
          </CardContent>

        </div>
      </Card>
    </Box>
  );
}

export default Post;
