import React, { useState } from 'react';
import axios from 'axios';

const refSave = 'http://localhost:8093/save';

const SavePage = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    location: '',
    type: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(refSave, formData);
      setMessage(response.data);
      setFormData({ id: '', name: '', location: '', type: '' });
    } catch (error) {
      console.error("Error saving data:", error);
      setMessage('Failed to save data.');
    }
  };

  return (
    <div>
      <h2>Add Institute</h2>
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
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Save Institute</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SavePage;
