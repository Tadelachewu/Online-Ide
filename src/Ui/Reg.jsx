
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth';

const auth = getAuth();

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError(null); // Clear error state on success

      // Redirect and show success toast (optional)
      navigate('/');
      toast.success('Signup successful!', { position: "top-right",style:toastStyle });
    } catch (error) {
      setError(error.message);
      toast.error('Signup failed!', { position: "bottom-right",style:toastStyle2}); // Display error toast//style:toastStyle2
    }
  };

  // Custom CSS for toast styling (optional)
  const toastStyle = {
    backgroundColor: '#f44336', // Adjust background color
    color: '#fff', // Adjust text color
    padding: '1rem', // Adjust padding
    borderRadius: '5px', // Adjust border radius
  };

  const toastStyle2 = {
    backgroundColor: 'red', // Adjust background color
    color: '#fff', // Adjust text color
    padding: '1rem', // Adjust padding
    borderRadius: '5px', // Adjust border radius
  };

  const form={
    width: '30%',
  height: '30%',
  padding:'100px',
  margin:'30px',
  marginLeft:'20%',
  backgroundColor: 'beige',
  fontsize:'10px',
  border: '5px black solid',
  display: 'grid',
  justifyContent:'center',
  gridTemplateColumns: 'repeat(1,1fr)',
  gap:'20%'
    }
    const inputs={
      padding: '8px',
     border:'3px greenyellow solid',
     borderRadius:'3px'
    }
    const button={
      padding:'5px',
    
      backgroundColor:'brown',
      borderRadius:'20px',
      width:'20%'
    }
  return (
    <div>
      <h2 style={{position:'relative', left:'20%'}}>Sign Up</h2>
      <form onSubmit={handleSignUp} style={form}>
      <label> Enter your email:</label>
        <input style={inputs}
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
          <label> Enter your password:</label>
        <input style={inputs}
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={button} type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signup;
