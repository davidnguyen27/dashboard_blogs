import './index.css';
import Navigation from './components/navigation/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer';
import PageContent from './components/content/PageContent';
import SideMenu from './components/side/SideMenu';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
        <ToastContainer></ToastContainer>
      </div>
      <Footer />
    </div>
  );
};

export default App;
