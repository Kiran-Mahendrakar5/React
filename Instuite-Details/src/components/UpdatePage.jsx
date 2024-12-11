import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const refUpdate = 'http://localhost:8096/update';

const UpdatePage = () => {
  const location = useLocation();
  const { id, name } = location.state || {}; // Get the passed state (id and name)

  const [formData, setFormData] = useState({
    id: id || '',
    name: name || '',
  });
  const [message, setMessage] = useState('');

  // Update the form data with passed values when the component mounts
  useEffect(() => {
    if (id && name) {
      setFormData({ id, name });
    }
  }, [id, name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${refUpdate}/${formData.id}?name=${formData.name}`);
      setMessage(response.data);
      setFormData({ id: '', name: '' });
    } catch (error) {
      console.error('Error updating data:', error);
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
            readOnly // Make the ID field read-only since it shouldn't be edited
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
