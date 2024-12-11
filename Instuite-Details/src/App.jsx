import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SavePage from './components/SavePage';
import ReadPage from './components/ReadPage';
import UpdatePage from './components/UpdatePage';
import DeletePage from './components/DeletePage';
import UploadExcel from './components/UploadExcel';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/save">Save</Link> | <Link to="/read">Read</Link> | <Link to="/update">Update</Link> | <Link to="/delete">Delete</Link> | <Link to="/upload">Upload Excel</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to Institute Management</h1>} />
          <Route path="/save" element={<SavePage />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
          <Route path="/delete/:id" element={<DeletePage />} />
          <Route path="/upload" element={<UploadExcel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
