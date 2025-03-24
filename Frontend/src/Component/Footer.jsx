import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { RiMailCheckFill, RiArrowRightLine } from 'react-icons/ri';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer-sec">
      <div className="main">
        <div className="logo row">
          <div className="footer-header">
            <img src="https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on-transparent-background.png" className="manik" alt="Logo" />
          </div>
          <div className="logo-des">
            <p className='paragh'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <Link to="#" className="btn-know">Know More</Link>
          </div>
        </div>
        <div className="office row">
          <div className="footer-header">
            <h3>Office</h3>
          </div>
          <div className="office-des">
            <p>Here are many variations of passages of Lorem Ipsum available</p>
            <Link to="mailto:manikmaity.haker2003@gmail.com">nasrina23navgurukul.org</Link>
            <p className="num">+91- 7055648508</p>
          </div>
        </div>
        <div className="link row">
          <div className="footer-header">
            <h3>Links</h3>
          </div>
          <div className="link-des">
            <Link to="#" className="footer-links">Home</Link>
            <Link to="#" className="footer-links">About</Link>
            <Link to="#" className="footer-links">Courses</Link>
            <Link to="#" className="footer-links">Assignment</Link>
          </div>
        </div>
        <div className="newsletter row">
          <div className="footer-header">
            <h3>Newsletter</h3>
          </div>
          <div className="newsletter-des">
            <div className="subscribe">
              <RiMailCheckFill className="sub-icon" />
              <input type="email" placeholder="Enter Email ID" required />
              <RiArrowRightLine className="sub-icon" />
            </div>
            <div className="icons">
              <Link to=""><FaFacebookF  className="social-icon" /></Link>
              <Link to="#"><FaInstagram className="social-icon" /></Link>
              <Link to="#"><FaLinkedinIn className="social-icon" /></Link>
              <Link to="#"><FaGithub className="social-icon" /></Link>
            </div>
          </div>
        </div>
      </div>
        <div className="copyright">
  <hr />
  <p>© Copyright 2025 Manik Maity.  
    <Link to="https://www.linkedin.com/in/yourprofile" target="_blank"><FaLinkedinIn className="social-icon" /></Link>
    <Link to="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><FaInstagram className="social-icon" /></Link>
    <Link to="mailto:your-email@gmail.com" target="_blank"><RiMailCheckFill className="social-icon" /></Link>
    <Link to="https://github.com/aayushisharma26/java" target="_blank"><FaGithub className="social-icon" /></Link>
    <Link to="https://www.facebook.com/login/" target="_blank"><FaFacebookF className="social-icon" /></Link>
  </p>
</div>


    </footer>
  );
};


export default Footer;



