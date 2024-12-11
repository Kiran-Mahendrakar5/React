import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReadPage = () => {
  const [data, setData] = useState([]);//Used to store the list of records retrieved from the backend (an array or object).
  const [error, setError] = useState('');//Captures any issues during the fetch operation

  const fetchData = async () => {// // Function to fetch data from the backend
    try {
      const response = await axios.get('http://localhost:8096/reads');
      setData(response.data);//// Update the state with the retrieved data
      setError('');//// Clear any existing error messages
    } catch (error) {
      console.error('Error fetching data:', error);// Log the error for debugging purposes
      setError('Failed to fetch data.');
    }
  };

  return (
    <div>
      <h1>Institute Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}{/* Display error message if any */}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>{/* Column for the record ID */}
            <th>Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{/* Table body for dynamic rows */}
          {data.length > 0 ? ( // Check if data is available
            data.map((item) => (// Iterate through each record in the data array
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.type}</td>
                <td>
                 
                  {/* <Link to={`/update/${item.id}`}>Update</Link>  */}
                  <Link to={`/update/${item.id}`} state={{ id: item.id, name: item.name }}>Update</Link>

                  | 
                 
                  <Link to={`/delete/${item.id}`}>Delete</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>{/* Message spans across all table columns */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReadPage;
