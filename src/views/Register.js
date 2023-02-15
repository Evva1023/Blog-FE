import React, {useState} from "react";
import {Link} from "react-router-dom";

export const Register = () => {
  
  const [user, setUser] = useState({username: "", email: "", password: "", confirmPassword: ""});

  const handleChange = e => setUser(prev => ({...prev, [e.target.name]: e.target.value}));

  const handleSubmit = e => {
      e.preventDefault();
      console.log(user, "User created an account");
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
    </form>
    <Link to="/login">Already have an account? Login</Link>
    </>
  );
};