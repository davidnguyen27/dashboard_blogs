import axios from 'axios';
import { Blogs } from '../types/Types';

export const updateBlog = async (id: string, updatedFields: Partial<Blogs>): Promise<Blogs> => {
  try {
    const response = await axios.put(
      `https://664f259afafad45dfae28842.mockapi.io/api/v1//BlogData/${id}`,
      updatedFields
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to update blog');
  }
};

export const getBlogs = async (): Promise<Blogs[]> => {
  const res = await axios.get('https://664f259afafad45dfae28842.mockapi.io/api/v1//BlogData');
  return res.data;
};

export const createBlog = async (newBlog: Blogs): Promise<Blogs> => {
  const res = await axios.post('https://664f259afafad45dfae28842.mockapi.io/api/v1//BlogData', newBlog);
  return res.data;
};
