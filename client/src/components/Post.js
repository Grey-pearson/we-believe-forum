import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';

function Post(props) {
  const { title, user, date, text, comments, likes, idk } = props

  return (
    <React.forwardRef>
      <div variant="outlined" className="post">
        {/* postText, postAuthor, createdAt, comments */}

      </div>
    </React.forwardRef>
  );
}

export default Post;
