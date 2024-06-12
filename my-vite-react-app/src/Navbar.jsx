import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const apiKey = '4958c2a6127f4ba3aeb83142241006';
const location = 'Bangalore'; // Change this to any location you prefer
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

const Navbar = ({ isLoggedIn, setShowLogin }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          
        {isLoggedIn && (
  <>
    <li className="nav-item">
      <Link className="nav-link" to="/home">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/features">Features</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/next">Next</Link>
    </li>
    {/* Add the link to the /weather route here */}
    <li className="nav-item">
      <Link className="nav-link" to="/weather">Weather API Data</Link>
    </li>
  </>
)}

          {!isLoggedIn && (
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
