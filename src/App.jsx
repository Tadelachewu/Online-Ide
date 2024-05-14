import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { auth } from './firebase';
import EditorOnline from './Ui/Editor';
import Login from './Ui/Loginu';
import Signup from './Ui/Reg';
import Navigat from "./Ui/Navig";

const App = () => {
  

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  return (
    <> 
  
    <Router>
    <Navigat />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={currentUser ? <EditorOnline /> : <Navigate replace to="/login" />}
        />
      </Routes>
    </Router>
    </>
  );
};

export default App;
