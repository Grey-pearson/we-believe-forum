import React from 'react';
import Post from './Post';
// should have some utils req for this

function PostList() {
  return (
    <div className="postList">
      <h2>Our Products:</h2>
      {/* refactor */}
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((post) => (
            <Post
              // refactor to be correct fields for a post
              key={post._id}
              _id={post._id}
              image={post.image}
              name={post.name}
              price={post.price}
              quantity={post.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default PostList;