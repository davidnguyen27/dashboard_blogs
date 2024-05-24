// ModalUpdate.tsx
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { Slide, toast } from 'react-toastify';
import { Blogs } from '../../types/Types';
import { updateBlog } from '../../API';

interface ModalUpdateProps {
  isUpdateOpen: boolean;
  setIsUpdateOpen: (isUpdateOpen: boolean) => void;
  handleUpdate: (updatedBlog: Blogs) => void;
  selectedBlog: Blogs | null;
}

const ModalUpdate: React.FC<ModalUpdateProps> = ({
  isUpdateOpen,
  setIsUpdateOpen,
  handleUpdate,
  selectedBlog,
}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    if (selectedBlog) {
      setTitle(selectedBlog.title);
      setDescription(selectedBlog.description);
    }
  }, [selectedBlog]);

  const handleCloseModal = () => {
    setIsUpdateOpen(false);
  };

  const handleUpdateSubmit = async () => {
    if (selectedBlog && selectedBlog.id) {
      try {
        const updatedBlog = await updateBlog(selectedBlog.id, { title, description });
        toast.success('Update successful', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: 'light',
          transition: Slide,
        });
        handleUpdate(updatedBlog);
        handleCloseModal();
      } catch (error) {
        console.error('Error updating blog:', error);
        toast.error('Update failed', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: 'light',
          transition: Slide,
        });
      }
    }
  };

  return (
    <Modal
      title="Update Blog"
      open={isUpdateOpen}
      onCancel={handleCloseModal}
      footer={[
        <Button key="back" onClick={handleCloseModal}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleUpdateSubmit}>
          Update
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="Title">
          <Input
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea
            autoSize={{ minRows: 6, maxRows: 10 }}
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalUpdate;
