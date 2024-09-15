import React, { useState } from 'react';
import { supabase } from './services/supabaseClient';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileCreation from './ProfileCreation';
import EditProfile from './EditProfile';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [containerMessage, setContainerMessage] = useState('');

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Registration successful! Please check your email to confirm.');
    }
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Login successful!');
    }
  };

  const testInterContainerCommunication = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/test');
      const data = await response.json();
      setContainerMessage(data.message);
    } catch (error) {
      setContainerMessage('Error fetching message from 3D Rendering Container');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Container 2</h1>
      <input
        type="email"
        placeholder="Email" building
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
      </div>
      {message && <p>{message}</p>}
      <button onClick={testInterContainerCommunication}>Test Inter-Container Communication</button>
      {containerMessage && <p>{containerMessage}</p>}
    </div>
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
