import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('https://java-5taq-aayushi-sharmas-projects.vercel.app/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError(null);
        alert('Signup successful!');
        navigate('/login');
      } else {
        setError(data.message || 'Signup failed');
        setMessage(null);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during signup.');
      setMessage(null);
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <h2>Signup</h2>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label>Name</label>
          </div>
          <div className="input-box">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            <label>Password</label>
          </div>
          <select className="select-field" name="role" onChange={handleChange} value={formData.role} required>
            <option value="" disabled>Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="btn">Signup</button>
          <div className="signup-link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;