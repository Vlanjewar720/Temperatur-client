import React, { useState, useEffect } from 'react';

function Get_m() {
  const [temperatures, setTemperatures] = useState([]);

  useEffect(() => {
    async function fetchTemperatures() {
      const url = 'http://localhost:3006/temperatures/';
      const response = await fetch(url);
      const data = await response.json();
      setTemperatures(data);
    }

    fetchTemperatures();
  }, []);

  return (
    <div className='container'>
          <h3 className='text-center'>DISPLAY ALL TEMPERATURE DATA</h3> <br />
          <table className='col-sm-6 table table-bordered table-striped table-hover'>
            <thead>
            <tr>
              <th> City</th>
              <th> State</th>
              <th> Max Temp</th>
              <th> Min Temp</th>
            </tr>
            </thead>
            <tbody>
            {temperatures.map((temperature) => (
            <tr  key={temperature.id}>
              <td>{temperature.cityName} </td>
              <td>{temperature.state} </td>
              <td>{temperature.maxTemp} </td>
              <td>{temperature.minTemp} </td>
            </tr>
      ))}
           </tbody>
          </table>
         
    </div>
  );
}

export default Get_m;

// In this code, the Get_m component uses the useState and useEffect hooks. The useState hook is used to manage the temperatures state, which will hold the data fetched from the server. The useEffect hook is used to fetch the temperatures from the server when the component mounts.

// Inside the useEffect hook, the fetchTemperatures function is defined and called. This function makes an asynchronous GET request to the specified URL (http://localhost:3006/temperatures/ in this case), retrieves the response, and parses it as JSON. The fetched data is then set using the setTemperatures function.

// Finally, the temperatures state is mapped over to render each temperature item as a set of paragraphs displaying the city, state, max temperature, and min temperature.