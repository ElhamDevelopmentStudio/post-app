import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

export const getPosts = async (page: number = 1, limit: number = 10) => {
  const response = await apiClient.get(`/posts`, {
    params: { _page: page, _limit: limit },
  });
  return response.data;
};

export const getPostById = async (id: number) => {
  const response = await apiClient.get(`/posts/${id}`);
  return {
    ...response.data,
    author: `User ${id % 10 + 1}`,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    commentCount: Math.floor(Math.random() * 50),
    likes: Math.floor(Math.random() * 100),
  };
};