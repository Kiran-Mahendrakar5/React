import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherTable from './WeatherTable';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=4958c2a6127f4ba3aeb83142241006&q=Bangalore');
        setWeatherData(response.data);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Weather Information</h2>
      {error && <p>{error}</p>}
      {weatherData && <WeatherTable weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
