import React from 'react';
import Table from 'react-bootstrap/Table';

const WeatherTable = ({ weatherData }) => {
  return (
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
        {/* Add more rows for other attributes as needed */}
      </tbody>
    </Table>
  );
};

export default WeatherTable;
