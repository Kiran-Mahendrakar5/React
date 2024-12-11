import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const refDelete = 'http://localhost:8096/deleteNameById'; // Backend API for deleting data

const DeletePage = () => {
  const [message, setMessage] = useState('');
  const { id } = useParams(); // Get the ID from URL parameters
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${refDelete}/${id}`);
      setMessage(response.data); // Display success message
      navigate('/read'); // Navigate back to the Read page after successful deletion
    } catch (error) {
      console.error('Error deleting data:', error);
      setMessage('Failed to delete data.');
    }
  };

  return (
    <div>
      <h2>Delete Institute</h2>
      <p>Are you sure you want to delete the institute with ID: {id}?</p>
      <button onClick={handleDelete}>Click To Delete</button>
      <p>{message}</p>
    </div>
  );
};

export default DeletePage;
