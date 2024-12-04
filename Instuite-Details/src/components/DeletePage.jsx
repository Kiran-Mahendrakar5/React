import React, { useState } from 'react';
import axios from 'axios';

const refDelete = 'http://localhost:8093/deleteNameById'; // Backend API for deleting data

const DeletePage = () => {
  const [id, setId] = useState(''); // Only need ID for deletion
  const [message, setMessage] = useState('');

  
  const handleChange = (e) => {
    setId(e.target.value);
  };

  // Handle form submission for delete
  const handleDelete = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    try {
      const response = await axios.delete(`${refDelete}/${id}`); // Corrected API call
      setMessage(response.data); // Display success message
      setId(''); // Reset ID input
    } catch (error) {
      console.error("Error deleting data:", error);
      setMessage('Failed to delete data.');
    }
  };
  

  return (
    <div>
      <h2>Delete Institute</h2>
      <form onSubmit={handleDelete}>
        <label>
          ID to Delete:
          <input
            type="number"
            value={id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Delete Institute</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeletePage;
