import React from 'react';

function Post() {
  return (
    <div className="post-list">
      <h1>Posts</h1>
      <ul>
        <li>
          <a href="/post/1">Post 1</a>
          <p>Description of Post 1</p>
        </li>
        <li>
          <a href="/post/2">Post 2</a>
          <p>Description of Post 2</p>
        </li>
      </ul>
    </div>
  );
}

export default Post;
