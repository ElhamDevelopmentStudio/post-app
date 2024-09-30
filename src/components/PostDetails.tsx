import React from 'react';
import { usePostStore } from '../store/PostStore';
import { usePostDetails } from '../hooks/usePostData';
import Loader from './Loader';
import { formatDate } from '../utils/dateFormatter';

const PostDetails: React.FC = () => {
  const selectedPostId = usePostStore((state) => state.selectedPostId);
  const { post, isLoading, isError } = usePostDetails(selectedPostId ? selectedPostId : 0);

  if (!selectedPostId) return <div className="text-center text-gray-500 mt-8">Select a post to view details</div>;
  if (isLoading) return <Loader />;
  if (isError) return <div className="text-center text-red-500 mt-8">Error loading post details.</div>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border mt-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span className="mr-4">
          <i className="fas fa-user mr-2"></i>
          Author: {post.author || 'Unknown'}
        </span>
        <span>
          <i className="far fa-calendar-alt mr-2"></i>
          {formatDate(post.createdAt)}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">{post.body}</p>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>
          <i className="far fa-comment mr-2"></i>
          {post.commentCount || 0} Comments
        </span>
        <span>
          <i className="far fa-heart mr-2"></i>
          {post.likes || 0} Likes
        </span>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
          Read Full Article
        </button>
      </div>
    </div>
  );
};

export default PostDetails;