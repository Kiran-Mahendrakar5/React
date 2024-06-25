import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const WeatherTable = ({ weatherData }) => {
  return (
    <div className="weather-info">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Location</td>
            <td>{`${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`}</td>
          </tr>
          <tr>
            <td>Last Updated</td>
            <td>{weatherData.current.last_updated}</td>
          </tr>
          <tr>
            <td>Temperature (°C)</td>
            <td>{weatherData.current.temp_c}</td>
          </tr>
          <tr>
            <td>Condition</td>
            <td>
              <img src={weatherData.current.condition.icon} alt="weather condition" />
              {weatherData.current.condition.text}
            </td>
          </tr>
          <tr>
            <td>Wind (kph)</td>
            <td>{weatherData.current.wind_kph}</td>
          </tr>
          <tr>
            <td>Humidity (%)</td>
            <td>{weatherData.current.humidity}</td>
          </tr>
          <tr>
            <td>Pressure (mb)</td>
            <td>{weatherData.current.pressure_mb}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default WeatherTable;