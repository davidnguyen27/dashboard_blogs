
import axios from 'axios';
import { Avatar, Button, Space, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { blogModel, getBlogData } from '../API/index'; // Import từ file API

const BlogManagement = () => {
  const [blogs, setBlogs] = useState<blogModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = getBlogData().then((blogData: blogModel[]) => {
      setBlogs(blogData);
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching blog data:', error);
      setLoading(false);
    });
    console.log("check data: ", getData)
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      axios.delete(`https://664f259afafad45dfae28842.mockapi.io/api/v1/BlogData/${id}`)
        .then(() => {
          setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
        })
        .catch(error => {
          console.error('Error deleting blog:', error);
        });
    }
  };
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Blog Management</Typography.Title>
      <Button type="primary">Add new post</Button>
      <Table
        loading={loading}
        columns={[
          {
            title: 'Title',
            dataIndex: 'title',
          },
          {
            title: 'Description',
            dataIndex: 'description',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            render: (status: boolean) => (status ? 'Published' : 'Draft'),
          },
          {
            title: 'Create Date',
            dataIndex: 'createDate',
          },
          {
            title: 'Update Date',
            dataIndex: 'updateDate',
          },
          {
            title: 'Content',
            dataIndex: 'content',
          },
          {
            title: 'Action',
            render: (_, record) => {
              return (
                <Button type="primary" danger onClick={() => handleDelete(record.id)}>
                  Delete
                </Button>
              );
            },
          },
        ]}
        dataSource={blogs}
        rowKey="id"
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};

export default BlogManagement;
