import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.main.css'; 

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();

  const isAuthenticated = !!localStorage.getItem("token");

  const handleNavigation = (path) => {
    console.log("Navigating to:", path);
    if (!isAuthenticated && path !== "/") {
      alert("Please login or sign up first!");
      navigate("/signup");
    } else {
      navigate(path);
    }
  };

  const handleHamburgerClick = () => {
    setMobileMenuVisible(true);
  };

  const handleCrossClick = () => {
    setMobileMenuVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setMobileMenuVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Symbol.png" alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><span onClick={() => handleNavigation('/courses')} style={{ cursor: 'pointer' }}>Courses</span></li>
          <li><span onClick={() => handleNavigation('/about')} style={{ cursor: 'pointer' }}>About</span></li>
          {/* <li><span onClick={() => handleNavigation('/layout')} style={{ cursor: 'pointer' }}>Assignment</span></li> */}
        </ul>
      </div>
      <div className="nav-button">
        <Link to="/signup">Register</Link>
      </div>
      <div id="hamburger-menu" onClick={handleHamburgerClick}>&#9776;</div>

      <div id="mobile-menu" className={mobileMenuVisible ? 'visible' : ''}>
        <div className="mobile-nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><span onClick={() => handleNavigation('/courses')} style={{ cursor: 'pointer' }}>Courses</span></li>
            <li><span onClick={() => handleNavigation('/about')} style={{ cursor: 'pointer' }}>About</span></li>
          </ul>
        </div>
        <div className="mobile-nav-button">
          <div className="anim-layer"></div>
          <Link to="/signup">Register</Link>
        </div>
        <div id="hamburger-cross" onClick={handleCrossClick}>&#10006;</div>
      </div>
    </div>
  );
};

export default Navbar;