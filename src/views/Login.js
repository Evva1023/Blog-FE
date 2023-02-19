import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState({username: "", password: ""});
  const navigate = useNavigate();

  const handleChange = e => setUser(prev => ({...prev, [e.target.name]: e.target.value}));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/login", user);
      navigate("/post");
    } catch (err) {
      console.log(err);
    }
    console.log(`${user.username} logged in`);
  };

  return (
    <>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" name="username" onChange={handleChange} required />
      <input type="password" placeholder="Password" name="password" onChange={handleChange} required />
      <button onClick={handleSubmit}>Login</button>
    </form>
    <Link to="/register">No account? Register now</Link>
    </>
  );
};