import React, { useState } from 'react';
import axios from 'axios';

const refSave = 'http://localhost:8096/save';// Backend API endpoint for saving data

const SavePage = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    location: '',
    type: '',
  });

  const [message, setMessage] = useState('');  // saving only one process //always holds a string, whether it's empty, a success message, 

  const handleChange = (e) => {
    const { name, value } = e.target; // Get input field name and value
    setFormData({ ...formData, [name]: value });// Update the respective field in formData
  };
 // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();// Prevent the default form submission behavior\
    //The page won't reload.
// The input's value is logged to the console.
    try {
      const response = await axios.post(refSave, formData);// // Send POST request to the backend with form data
      setMessage(response.data);// // Set the success message from backend response
      setFormData({ id: '', name: '', location: '', type: '' });// Clear the form fields
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