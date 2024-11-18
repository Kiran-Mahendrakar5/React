import React, { useState } from 'react';
import axios from 'axios';

const ref = 'http://localhost:8091/reads';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get(ref);  // Fetch data from the backend API
      console.log("Response:", response);  // Log the entire response for debugging
      setData(response.data);  // Store the response data in the state
      setError('');  // Clear any previous errors
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response) {
        // If backend error
        setError(`Failed to fetch data: ${error.response.status} ${error.response.statusText}`);
      } else if (error.request) {
        // No response received
        setError('No response from the server.');
      } else {
        // Other errors
        setError(`Error setting up request: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h1>Instuite Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message if any */}

      {/* Table to display the data */}
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>location</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.type}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="4">No data available</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
