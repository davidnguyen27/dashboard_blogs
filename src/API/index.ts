import axios from 'axios';
import { Blogs } from '../types/Types';

export const updateBlog = async (id: string, updatedFields: Partial<Blogs>): Promise<Blogs> => {
  try {
    const response = await axios.put(
      `https://6535e2c5c620ba9358ecc013.mockapi.io/blogs/${id}`,
      updatedFields
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to update blog');
  }
};

export const getBlogs = async (): Promise<Blogs[]> => {
  const res = await axios.get('https://6535e2c5c620ba9358ecc013.mockapi.io/blogs');
  return res.data;
};

export const createBlog = async (newBlog: Blogs): Promise<Blogs> => {
  const res = await axios.post('https://6535e2c5c620ba9358ecc013.mockapi.io/blogs', newBlog);
  return res.data;
};

const apiClient = axios.create({
  baseURL: 'https://664f259afafad45dfae28842.mockapi.io/api/v1', // Thay thế bằng URL của MockAPI hoặc API thật
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBlogData = async (): Promise<Blogs[]> => {
  const response = await apiClient.get('/BlogData');
  return response.data;
};
