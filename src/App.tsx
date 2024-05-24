import './index.css';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import PageContent from './components/content/PageContent';
import SideMenu from './components/side/SideMenu';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
