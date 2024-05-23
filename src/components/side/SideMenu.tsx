import { AppstoreOutlined, BookOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string>('/');

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: 'Dashboard',
            icon: <AppstoreOutlined />,
            key: '/',
          },
          {
            label: 'Blog Management',
            key: '/blog-management',
            icon: <BookOutlined />,
          },
          {
            label: 'Orders',
            key: '/orders',
            icon: <ShoppingCartOutlined />,
          },
          {
            label: 'Customers',
            key: '/customers',
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;