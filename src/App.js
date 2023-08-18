
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import Help from './pages/Help';
import Footer from './components/Footer';

function App() {
  return (
   
   <Router>
    <Navbar />
    
    <Routes>
    <Route path='/'  Component={Home} />
    <Route path='Contact'  Component={ContactUs} />
    <Route path='Help'  Component={Help} />
    </Routes>
    <Footer/>
   </Router>
   
  );
}

export default App;
