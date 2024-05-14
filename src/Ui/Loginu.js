import React, { useState } from "react";
import "./Login.css";
import Register from "./Reg";
import Signup from "./Sign";
import EditorOnline  from "./Editor";

const Login = () => {
  const [showLoginFields, setShowLoginFields] = useState(false);
  const [showSignupFields, setShowSignupFields] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
    setShowLoginFields(true);
    setShowSignupFields(false);
  };

  const handleSignup = () => {
    setShowSignupFields(true);
    setShowLoginFields(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login validation and API call to check the loginData with the database
    // For now, let's just log the data
    console.log("Login submitted:", loginData);
    setSubmitted(true);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Perform signup validation and API call to save the signupData to the database
    // For now, let's just log the data
    console.log("Signup submitted:", signupData);
    setSubmitted(true);
  };

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupInputChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
const styling={
  backgroundColor:"rgb(50,8,100)",
  padding:"50px"

}
  if (submitted) {
    return (<div style={styling}><EditorOnline  /></div>); 
  }
  const styles = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '3px',
    display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "10px",
    fontSize:"20px"

  }

  return (
    <div style={styles}>
      <h1>Log in if you have an account</h1>
      <button onClick={handleLogin}>Login</button>
      {showLoginFields && (
        <form onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleLoginInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginInputChange}
          />
          <button type="submit">Login</button>
        </form>
      )}
      <h1>Sign up first if you are new</h1>
      <button onClick={handleSignup}>Sign up</button>
      {showSignupFields && (
        <form onSubmit={handleSignupSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={signupData.username}
            onChange={handleSignupInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleSignupInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleSignupInputChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={signupData.firstName}
            onChange={handleSignupInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={signupData.lastName}
            onChange={handleSignupInputChange}
          />
          <button type="submit">Sign up</button>
        </form>
      )}
    </div>
  );
};

export default Login;