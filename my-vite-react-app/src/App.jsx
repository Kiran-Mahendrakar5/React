// src/App.jsx
import React from 'react';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app-container text-white h-[100vh] bg-blue-500">
      <Navbar />
      <div className="content-container flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
}

export default App;
