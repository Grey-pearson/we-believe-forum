import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PostList from '../components/Postlist';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

export default function Home() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const postData = data?.thoughts || [];

  return (
    <div>
      {/* props for nav?? */}
      <div >
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PostList
            posts={postData}
          />
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
