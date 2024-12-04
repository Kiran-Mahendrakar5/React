import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SavePage from './components/SavePage';
import ReadPage from './components/ReadPage';
import UpdatePage from './components/UpdatePage';
import DeletePage from './components/DeletePage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/save">Save</Link> | <Link to="/read">Read</Link> | <Link to="/update">Update</Link> | <Link to="/delete">Delete</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to Institute Management</h1>} />
          <Route path="/save" element={<SavePage />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/delete" element={<DeletePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SavePage from './components/SavePage';
// import ReadPage from './components/ReadPage';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <Link to="/">Home</Link> | <Link to="/save">Save</Link> | <Link to="/read">Read</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<h1>Welcome to Institute Management</h1>} />
//           <Route path="/save" element={<SavePage />} />
//           <Route path="/read" element={<ReadPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;




// import React, { useState } from 'react';
// import axios from 'axios';
// // import SavePage from './components/SavePage';


// const ref = 'http://localhost:8092/reads';

// function FetchData() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState('');

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(ref);
//       setData(response.data);
//       setError('');
//     } catch (error) {
//       if (error.response) {
//         setError(`Failed to fetch data: ${error.response.status} ${error.response.statusText}`);
//       } else if (error.request) {
//         setError('No response from the server.');
//       } else {
//         setError(`Error setting up request: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Institute Data</h1>
//       <button onClick={fetchData}>Fetch Data</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <table border="1">
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>name</th>
//             <th>location</th>
//             <th>Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map(item => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.location}</td>
//                 <td>{item.type}</td>
//               </tr>
//             ))
//           ) : (
//             <tr><td colSpan="4">No data available</td></tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default FetchData;














// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const refSave = 'http://localhost:8092/save'; // Backend API for saving data

// // function App() {
// //   // State for the form inputs
// //   const [formData, setFormData] = useState({
// //     id: '',
// //     name: '',
// //     location: '',
// //     type: '',
// //   });

// //   const [message, setMessage] = useState(''); // For success/error messages

// //   // Handle form input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent page refresh on form submission
// //     try {
// //       const response = await axios.post(refSave, formData);
// //       setMessage(response.data); // Set response message
// //       setFormData({ id: '', name: '', location: '', type: '' }); // Reset form fields
// //     } catch (error) {
// //       console.error("Error saving data:", error);
// //       setMessage('Failed to save data.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Institute Management</h1>

// //       {/* Add Data Form */}
// //       <h2>Add Institute</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           ID:
// //           <input
// //             type="number"
// //             name="id"
// //             value={formData.id}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Name:
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Location:
// //           <input
// //             type="text"
// //             name="location"
// //             value={formData.location}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Type:
// //           <input
// //             type="text"
// //             name="type" i want create this in another page how to do 
// //             value={formData.type}
// //             onChange={handleChange}
// //             required
// //           />
// //         </label>
// //         <br />
// //         <button type="submit">Add Institute</button>
// //       </form>

// //       {/* Display success or error message */}
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // }

// // export default App;