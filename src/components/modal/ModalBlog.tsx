import TextArea from 'antd/es/input/TextArea';
import { Blogs, ModalBlogProps } from '../../types/Types';
import { Button, Input, Modal, message } from 'antd';
import { ChangeEvent, useState } from 'react';
import { Slide, toast } from 'react-toastify';
import { createBlog } from '../../API';

const ModalBlog = (props: ModalBlogProps) => {
  const { isOpen, setIsOpen, handleCreate } = props;

  const currentDate = new Date().toISOString().split('T')[0];

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>(''); 
  const [content, setContent] = useState<string>(''); 

  const [titleError, setTitleError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const [contentError, setContentError] = useState<string | null>(null);

  const getTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value) setTitleError(null);
  };

  const getDescriptionValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    if (e.target.value) setDescriptionError(null);
  };

  const getStatusValue = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
    if (e.target.value) setStatusError(null);
  };

  const getContentValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (e.target.value) setContentError(null);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
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

    const newBlog: Blogs = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      title: title,
      description: description,
      status: status,
      createDate: currentDate,
      updateDate: currentDate,
      content: content,
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
      <Input 
        placeholder="Title" 
        value={title} 
        onChange={getTitleValue} 
        status={titleError ? 'error' : ''} 
      />
      {titleError && <div style={{ color: 'red' }}>{titleError}</div>}
      
      <Input type="date" value={currentDate} disabled />
      
      <TextArea
        placeholder="Description"
        autoSize={{ minRows: 6, maxRows: 10 }}
        value={description}
        onChange={getDescriptionValue}
        status={descriptionError ? 'error' : ''}
      />
      {descriptionError && <div style={{ color: 'red' }}>{descriptionError}</div>}
      
      <Input 
        placeholder="Status" 
        value={status} 
        onChange={getStatusValue} 
        status={statusError ? 'error' : ''}
      />
      {statusError && <div style={{ color: 'red' }}>{statusError}</div>}
      
      <TextArea
        placeholder="Content"
        autoSize={{ minRows: 6, maxRows: 10 }}
        value={content}
        onChange={getContentValue}
        status={contentError ? 'error' : ''}
      />
      {contentError && <div style={{ color: 'red' }}>{contentError}</div>}
    </Modal>
  );
};

export default ModalBlog;
