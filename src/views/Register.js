import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export const Register = () => {
  
  const [user, setUser] = useState({username: "", email: "", password: "", confirmPassword: ""});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => setUser(prev => ({...prev, [e.target.name]: e.target.value}));

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (user.password === user.confirmPassword) {
        try {
          const res = await axios.post("http://localhost:8000/register", user);
          console.log(res);
          console.log(`${user.username} created an account`);
          navigate("/");
        } catch (err) {
          console.log(err);
          setError(err.response.data.message);
        }
      } else {
        setError("Password not OK");
      }
  };


  return (
    <>
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="Username" name="username" onChange={handleChange} required />
      <input type="email" placeholder="Email Address" name="email" onChange={handleChange} required />
      <input type="password" placeholder="Password" name="password" onChange={handleChange} required />
      <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} required />
      <button onClick={handleSubmit}>Create Account</button>
      {error && <p className="error">{error}</p>}
    </form>
    <Link to="/login">Already have an account? Login</Link>
    </>
  );
};