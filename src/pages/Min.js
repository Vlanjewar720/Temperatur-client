import React, { useState, useEffect } from 'react';

function Min() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    async function fetchMinTemperature() {
      const url = 'http://localhost:3006/temperatures/min';
      const response = await fetch(url);
      const data = await response.json();
      setTemperature(data);
    }

    fetchMinTemperature();
  }, []);

  return (
    <div className='container'>
      <h3 className='text-center'>MINIMUM TEMPERATURE</h3> <br />
      {temperature && (
        <table className='table table-bordered table-striped table-hover text-center'>
          <thead>
            <tr>
              <th>City</th>
              <th>State</th>
              <th>Min Temp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{temperature.cityName}</td>
              <td>{temperature.state}</td>
              <td>{temperature.minTemp}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Min;

//In this code, we define the MinTemp component which fetches the minimum temperature data from the server using the provided URL.
// The fetched temperature data is stored in the temperature state variable.
// The component renders the city name, state, and minimum temperature in a table if the temperature state is not null. 
// Only one city's data is displayed since the API endpoint /temperatures/min returns the minimum temperature for a single city

