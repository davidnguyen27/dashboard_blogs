export const getOrders = () => {
  return fetch('https://dummyjson.com/carts/1').then((res) => res.json());
};

export const getRevenue = () => {
  return fetch('https://dummyjson.com/carts').then((res) => res.json());
};

export const getInventory = () => {
  return fetch('https://dummyjson.com/products').then((res) => res.json());
};

export const getCustomers = () => {
  return fetch('https://dummyjson.com/users').then((res) => res.json());
};

export const getComments = () => {
  return fetch('https://dummyjson.com/comments').then((res) => res.json());
};

export const getBlogs = () => {
  return fetch('https://6535e2c5c620ba9358ecc013.mockapi.io/blogs').then((res) => res.json());
};
