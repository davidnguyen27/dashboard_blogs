import { Route, Routes } from 'react-router-dom';
import CustomerManagement from '../../pages/CustomerManagement';
import OrdersManagement from '../../pages/OrdersManagement';
import InventoryManagement from '../../pages/InventoryManagement';
import Dashboard from '../../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/blog-management" element={<InventoryManagement />}></Route>
      <Route path="/orders" element={<OrdersManagement />}></Route>
      <Route path="/customers" element={<CustomerManagement />}></Route>
    </Routes>
  );
};

export default AppRoutes;
