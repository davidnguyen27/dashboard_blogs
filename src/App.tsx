import './index.css';
import Navigation from './components/navigation/Navigation';
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
      </div>
      <Footer />
    </div>
  );
};

export default App;
