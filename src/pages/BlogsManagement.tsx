import { Avatar, Button, Rate, Space, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getBlogs } from '../API';
import { DeleteOutlined, FundViewOutlined, SignatureOutlined } from '@ant-design/icons';
import { Blogs } from '../types/Types';
import ModalBlog from '../components/modal/ModalBlog';

const BlogsManagement = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Blogs[]>([]);

  useEffect(() => {
    setLoading(true);
    getBlogs().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCreate = (newBlog: Blogs) => {
    const newBlogs = [...dataSource, newBlog];
    setDataSource(newBlogs);
  };

  return (
    <>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Blog Management</Typography.Title>
        <Button type="primary" onClick={handleOpenModal}>
          + Add new post
        </Button>
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
              title: 'Description',
              dataIndex: 'description',
            },
            // {
            //   title: 'Rating',
            //   dataIndex: 'rating',
            //   render: (rating) => {
            //     return <Rate value={rating} allowHalf disabled />;
            //   },
            // },
            {
              title: 'Created At',
              dataIndex: 'createdAt',
            },
            {
              title: 'Action',
              render: () => {
                return (
                  <>
                    <Button type="primary" danger>
                      <DeleteOutlined />
                    </Button>
                    <Button type="primary">
                      <SignatureOutlined />
                    </Button>
                    <Button type="primary">
                      <FundViewOutlined />
                    </Button>
                  </>
                );
              },
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 6,
          }}
        ></Table>
      </Space>
      <ModalBlog isOpen={isOpen} setIsOpen={setIsOpen} handleCreate={handleCreate} />
    </>
  );
};

export default BlogsManagement;
