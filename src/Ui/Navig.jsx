import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigat = () => {
  const cont={
     
      width: '100%',
      height:'10%',
   display: "flex",
   justifyContent:"end", 
   gap: '10px',
   backgroundColor: 'olive',
   color: 'mediumspringgreen'
  }
  const log={
    padding:'10px',
    margin:'6px',
    color:'white',
    borderRadius:'7px',
    backgroundColor: 'black'
  }
  const sign={
    padding:'10px',
    margin:'6px',
    color:'white',
    borderRadius:'7px',
    backgroundColor: 'black'
  }
  return (
    <div style={cont}>
     
    <h1>  already have account:</h1>
     
      <NavLink to="/login" style={log} activeClassName="active">login</NavLink>
     
      <h1>  new user:</h1>
      <NavLink to="/signup" style={sign} activeClassName="active">sign up</NavLink>
    </div>
  );
};

export default Navigat;