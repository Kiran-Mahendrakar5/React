import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // Imports the App component
import './index.css'; // Imports CSS styles for the index

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renders the App component within a StrictMode wrapper */}
  </React.StrictMode>,
);
