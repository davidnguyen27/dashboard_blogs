import React, { ChangeEvent, useEffect, useState } from 'react';
import { Modal, Button, Input, Form, message } from 'antd';
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
  const [status, setStatus] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [createDate, setCreateDate] = useState<string>('');
  const [updateDate, setUpdateDate] = useState<string>('');

  const [titleError, setTitleError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [contentError, setContentError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedBlog) {
      setTitle(selectedBlog.title);
      setDescription(selectedBlog.description);
      setStatus(selectedBlog.status || '');
      setContent(selectedBlog.content || '');
      setCreateDate(selectedBlog.createDate || '');
      setUpdateDate(selectedBlog.updateDate || '');
      setTitleError(null);
      setDescriptionError(null);
      setStatusError(null);
      setContentError(null);
    }
  }, [selectedBlog]);

  const handleCloseModal = () => {
    setIsUpdateOpen(false);
  };

  const handleUpdateSubmit = async () => {
    let valid = true;
    if (!title) {
      setTitleError('Title is required');
      valid = false;
    }
    if (!description) {
      setDescriptionError('Description is required');
      valid = false;
    }
    if (!status) {
      setStatusError('Status is required');
      valid = false;
    }
    if (!content) {
      setContentError('Content is required');
      valid = false;
    }

    if (!valid) {
      return;
    }

    if (selectedBlog && selectedBlog.id) {
      try {
        const updatedBlog = await updateBlog(selectedBlog.id, {
          title,
          description,
          status,
          content,
          createDate,
          updateDate: new Date().toISOString().split('T')[0], // update updateDate to current date
        });
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
        <Form.Item
          label="Title"
          validateStatus={titleError ? 'error' : ''}
          help={titleError}
        >
          <Input
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
              if (e.target.value) setTitleError(null);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Description"
          validateStatus={descriptionError ? 'error' : ''}
          help={descriptionError}
        >
          <Input.TextArea
            autoSize={{ minRows: 6, maxRows: 10 }}
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setDescription(e.target.value);
              if (e.target.value) setDescriptionError(null);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Status"
          validateStatus={statusError ? 'error' : ''}
          help={statusError}
        >
          <Input
            value={status}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setStatus(e.target.value);
              if (e.target.value) setStatusError(null);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Content"
          validateStatus={contentError ? 'error' : ''}
          help={contentError}
        >
          <Input.TextArea
            autoSize={{ minRows: 6, maxRows: 10 }}
            value={content}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setContent(e.target.value);
              if (e.target.value) setContentError(null);
            }}
          />
        </Form.Item>
        <Form.Item label="Create Date">
          <Input type="date" value={createDate} disabled />
        </Form.Item>
        <Form.Item label="Update Date">
          <Input type="date" value={updateDate} disabled />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalUpdate;
