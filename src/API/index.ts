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
