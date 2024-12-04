import React, { useState } from 'react';
import axios from 'axios';

const refUpdate = 'http://localhost:8093/update'; // Backend API for updating data

const UpdatePage = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${refUpdate}/${formData.id}?name=${formData.name}`); // Send only required data
      setMessage(response.data);
      setFormData({ id: '', name: '' }); // Reset fields
    } catch (error) {
      console.error("Error updating data:", error);
      setMessage('Failed to update data.');
    }
  };

  return (
    <div>
      <h2>Update Institute</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Update Institute</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdatePage;
