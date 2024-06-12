import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Features from './Features';
import Contact from './Contact';
import Next from './Next';
import Weather from './Weather'; // Import the Weather component
import NotFound from './NotFound';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      <div className="app-container text-white h-[100vh] bg-blue-500">
        <Navbar isLoggedIn={isLoggedIn} setShowLogin={setShowLogin} />
        <div className="content-container flex justify-center items-center">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to="/home" />
                ) : (
                  showLogin ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Home />
                )
              }
            />
            {isLoggedIn && (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/next" element={<Next />} />
                <Route path="/weather" element={<Weather />} /> {/* Add Weather route */}
                <Route path="*" element={<NotFound />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
