import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PostList from '../components/Postlist';

export default function Home() {
  return (
    <>
      {/* props for nav?? */}
      <PostList />
      {/* <Footer /> */}
      <h1>Home Page</h1>
    </>
  );
}
