import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import BlogsManagement from '../../pages/BlogsManagement';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/blog-management" element={<BlogsManagement />}></Route>
    </Routes>
  );
};

export default AppRoutes;
