import { useEffect, useState } from 'react';
import { Button, Space, Table, Typography, Row, Col } from 'antd';
import { FundViewOutlined, SignatureOutlined } from '@ant-design/icons';
import { getBlogs } from '../API';
import { Blogs } from '../types/Types';
import ModalBlog from '../components/modal/ModalBlog';
import ModalUpdate from '../components/modal/ModalUpdate';
import axios from 'axios';

const BlogsManagement = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for ModalBlog
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false); // State for ModalUpdate
  const [dataSource, setDataSource] = useState<Blogs[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blogs | null>(null);

  useEffect(() => {
    setLoading(true);
    const getData = getBlogs()
      .then((blogData: Blogs[]) => {
        setDataSource(blogData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
        setLoading(false);
      });
    console.log('check data: ', getData);
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      axios
        .delete(`https://6535e2c5c620ba9358ecc013.mockapi.io/blogs/${id}`)
        .then(() => {
          setDataSource((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
        })
        .catch((error) => {
          console.error('Error deleting blog:', error);
        });
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCreate = (newBlog: Blogs) => {
    const newBlogs = [...dataSource, newBlog];
    setDataSource(newBlogs);
    setIsOpen(false); // Close ModalBlog after creating a new blog
  };

  const handleUpdate = (updatedBlog: Blogs) => {
    const updatedData = dataSource.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog));
    setDataSource(updatedData);
    setIsUpdateOpen(false);
  };

  const openUpdateModal = (blog: Blogs) => {
    setSelectedBlog(blog);
    setIsUpdateOpen(true); // Open ModalUpdate
  };

  return (
    <>
      <Space size={20} direction="vertical" style={{ width: '100%' }}>
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={16}>
            <Typography.Title level={4}>Blog Management</Typography.Title>
          </Col>
          <Col xs={24} sm={8} style={{ textAlign: 'right' }}>
            <Button type="primary" onClick={handleOpenModal}>
              + Add new post
            </Button>
          </Col>
        </Row>
        <Table
          loading={loading}
          columns={[
            {
              title: 'Title',
              dataIndex: 'title',
              ellipsis: true,
            },
            {
              title: 'Description',
              dataIndex: 'description',
              ellipsis: true,
            },
            {
              title: 'Created At',
              dataIndex: 'createdAt',
            },
            {
              title: 'Action',

              render: (_, record) => (
                <Space size="middle">
                  <Button type="primary" onClick={() => openUpdateModal(record)}>
                    <SignatureOutlined />
                  </Button>
                  <Button type="primary">
                    <FundViewOutlined />
                  </Button>
                  <Button type="primary" danger onClick={() => handleDelete(record.id + '')}>
                    Delete
                  </Button>
                </Space>
              ),
            },
          ]}
          dataSource={dataSource.map((item) => ({ ...item, key: item.id }))}
          pagination={{ pageSize: 6 }}
          scroll={{ x: 'max-content' }}
        />
      </Space>
      <ModalBlog isOpen={isOpen} setIsOpen={setIsOpen} handleCreate={handleCreate} />
      <ModalUpdate
        isUpdateOpen={isUpdateOpen}
        setIsUpdateOpen={setIsUpdateOpen}
        handleUpdate={handleUpdate}
        selectedBlog={selectedBlog}
      />
    </>
  );
};

export default BlogsManagement;
