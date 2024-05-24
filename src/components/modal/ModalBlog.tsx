import TextArea from 'antd/es/input/TextArea';
import { Blogs, ModalBlogProps } from '../../types/Types';
import { Button, Input, Modal, message } from 'antd';
import { ChangeEvent, useState } from 'react';
import { createBlog } from '../../API';
import { Slide, toast } from 'react-toastify';

const ModalBlog = (props: ModalBlogProps) => {
  const { isOpen, setIsOpen, handleCreate } = props;

  const currentDate = new Date().toISOString().split('T')[0];

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const getTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const getDescriptionValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    const newBlog: Blogs = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      title: title,
      description: description,
      createdAt: currentDate,
    };
    try {
      const createdBlog = await createBlog(newBlog);
      handleCreate(createdBlog);
      toast.success('Create successful', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
      handleCloseModal();
    } catch (error) {
      message.error('Failed to create blog');
    }
  };

  return (
    <Modal
      title="Create new blog"
      open={isOpen}
      onCancel={handleCloseModal}
      footer={[
        <Button key="back" onClick={handleCloseModal}>
          Cancel
        </Button>,
        <Button onClick={handleSubmit}>Add</Button>,
      ]}
    >
      <Input placeholder="Title" value={title} onChange={getTitleValue} />
      <Input type="date" value={currentDate} />
      <TextArea
        placeholder="Description"
        autoSize={{ minRows: 6, maxRows: 10 }}
        value={description}
        onChange={getDescriptionValue}
      />
    </Modal>
  );
};

export default ModalBlog;
