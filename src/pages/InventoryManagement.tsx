import { Avatar, Button, Rate, Space, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getInventory } from '../API';

const InventoryManagement = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Blog Management</Typography.Title>
      <Button type="primary">Add new post</Button>
      <Table
        loading={loading}
        columns={[
          {
            title: 'Thumbnail',
            dataIndex: 'thumbnail',
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            render: (value) => <span>${value}</span>,
          },
          {
            title: 'Rating',
            dataIndex: 'rating',
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: 'Stock',
            dataIndex: 'stock',
          },

          {
            title: 'Brand',
            dataIndex: 'brand',
          },
          {
            title: 'Category',
            dataIndex: 'category',
          },
          {
            title: 'Action',
            render: () => {
              return (
                <Button type="primary" color="red">
                  Delete
                </Button>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default InventoryManagement;
