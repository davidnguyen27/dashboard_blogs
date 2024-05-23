import axios from 'axios';
export interface blogModel {
  id: string;
  title: string;
  description: string;
  status: boolean;
  createDate: string;
  updateDate: string;
  content: string;
}

const apiClient = axios.create({
  baseURL: 'https://664f259afafad45dfae28842.mockapi.io/api/v1', // Thay thế bằng URL của MockAPI hoặc API thật
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBlogData = async (): Promise<blogModel[]> => {
  const response = await apiClient.get('/BlogData');
  return response.data;
};
// export const getBlogData = async (): Promise<blogModel[]> => {
//   const response = await fetch('https://664f259afafad45dfae28842.mockapi.io/api/v1/BlogData')
//   const data = await response.json();
//   return data.products; // Giả sử rằng API trả về đối tượng với mảng products
// }

// export const getBlogData = () => {
//   return fetch('https://664f259afafad45dfae28842.mockapi.io/api/v1/BlogData').then((res) => res.json());
// };

export const getBlogDetail = () => {
  return fetch('https://664f259afafad45dfae28842.mockapi.io/api/v1/BlogData/:id').then((res) => res.json());
};

export const Delete = () => {
  return fetch('https://664f259afafad45dfae28842.mockapi.io/api/v1/BlogData/:id').then((res) => res.json());
};

// export const getCustomers = () => {
//   return fetch('https://dummyjson.com/users').then((res) => res.json());
// };

// export const getComments = () => {
//   return fetch('https://dummyjson.com/comments').then((res) => res.json());
// };
