import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostDetails from '../components/PostDetails';

const PostsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Posts</h1>
      <PostList currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PostDetails />
    </div>
  );
};

export default PostsPage;