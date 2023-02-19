import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({username: "", password: ""});

  const handleChange = e => setUser(prev => ({...prev, [e.target.name]: e.target.value}));
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(user, "User logged in");
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