import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast

const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e)=>{
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null); // Clear error state on success
      navigate('/'); // Navigate to home page

      // Display success toast notification (optional)
      toast.success('Login successful!',{ style: { backgroundColor: 'green', position:'top-right', color: 'white' } });

    } catch (error) {
      setError(error.message);
      toast.error('Login failed!', { style: { backgroundColor: 'green', color: 'white' } }); // Display error toast
    }
  };



  const form={
  width: '30%',
height: '50%',
padding:'50px',
margin:'30px',
marginLeft:'20%',
backgroundColor: 'beige',
fontsize:'10px',
borderTop: 'black',
display: 'grid',
justifyContent:'center',
gridTemplateColumns: 'repeat(1,1fr)',
gap:'10%'
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
    <div className="login">
      <h2 style={{position:"relative",left:"20%"}}>Login</h2>
      <form onSubmit={handleLogin} style={form}>
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
        <button   type="submit" style={button}>Login</button>
       
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
