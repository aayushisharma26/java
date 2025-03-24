import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About/About.jsx';
import Home from './Component/Home.jsx';
<<<<<<< HEAD
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiMailCheckFill, RiArrowRightLine } from 'react-icons/ri';
import Footer from './Component/Footer.jsx'
=======
>>>>>>> 94f393e (Working on Navbar)
import Navbar from './Component/Navbar.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;

