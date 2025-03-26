import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Server Response:", data);
  
      if (!data.token || !data.user) {
        throw new Error("Token or user data missing from response");
      }
  
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    //   setIsLoggedIn(true);
  
      if (data.user.role === 'Employer') {
        navigate('/job-posting');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.message);
    }
  };
  

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box">
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
            <label>Password</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="forgot-pass">
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="signup-link">
            <p>Have no account yet? <Link to="/signup">Signup</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
