import { Route, Routes } from 'react-router-dom';
import BlogsManagement from '../../pages/BlogsManagement';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogsManagement />}></Route>
    </Routes>
  );
};

export default AppRoutes;
