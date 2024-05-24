// API.ts
import axios from 'axios';

const BASE_URL = 'https://6535e2c5c620ba9358ecc013.mockapi.io/blogs';

export interface Blog {
  id: string;
  title: string;
  description: string;
  // Add other fields if needed
}

export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch blogs');
  }
};

export const updateBlog = async (id: string, updatedFields: Partial<Blog>): Promise<Blog> => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedFields);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update blog');
  }
};

export const getBlog = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch blog with ID ${id}`);
  }
};
