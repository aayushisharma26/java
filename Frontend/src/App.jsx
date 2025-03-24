import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About/About.jsx';
import Home from './Component/Home.jsx';
import Navbar from './Component/Navbar.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
