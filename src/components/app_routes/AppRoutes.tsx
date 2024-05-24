import { Route, Routes } from 'react-router-dom';
// import CustomerManagement from '../../pages/CustomerManagement';
// import Dashboard from '../../pages/Dashboard';
// import OrdersManagement from '../../pages/OrdersManagement';

import BlogManagement from '../../pages/InventoryManagement';


const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/blog-management" element={<BlogManagement />}></Route>
      {/* <Route path="/" element={<Dashboard />}></Route>
     
      <Route path="/orders" element={<OrdersManagement />}></Route>
      <Route path="/customers" element={<CustomerManagement />}></Route> */}
    </Routes>
  );
};

export default AppRoutes;
