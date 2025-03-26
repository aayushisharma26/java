import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About/About.jsx';
import Home from './Component/Home.jsx';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiMailCheckFill, RiArrowRightLine } from 'react-icons/ri';
import Footer from './Component/Footer.jsx'
import Navbar from './Component/Navbar.jsx';
import SignUp from './SignUp/SignUp';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/login" element={<Login />} /> */}


      </Routes>
      <Footer/>
    </Router>
  );
};


export default App;

