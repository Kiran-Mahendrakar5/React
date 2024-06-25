import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherTable from './WeatherTable';

const Weather = () => {
  const [location, setLocation] = useState('Bangalore');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=4958c2a6127f4ba3aeb83142241006&q=${location}`);
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.elements.location.value;
    setLocation(newLocation);
  };

  return (
    <div className="weather-container">
      <h2>Weather Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Enter location:</label>
        <input type="text" id="location" name="location" required />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherTable weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
