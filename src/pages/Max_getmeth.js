import React, { useState, useEffect } from 'react';

function Max_getmeth() {
  const [data, setData] = useState('');

  const fetchData = async () => {
  
      const response = await fetch("http://localhost:3006/temperatures/max",{
        method:"GET"
      });
      const jsonData = await response.json();
      setData(jsonData);
      
    };
    
      useEffect(() => {
        fetchData();
      }, []);
      
  return (
    <div className='container'>
      <h3 className='text-center'>MAXIMUM TEMPERATURE</h3> <br />
      <table className='col-sm-6 table table-bordered table-striped text-center'>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th >Max Temp</th>
            <th>Min Temp</th>
          </tr>
        </thead>
        <tbody>
         
            <tr >
              <td>{data.cityName}</td>
              <td>{data.state}</td>
              <td>{data.maxTemp}</td>
              <td>{data.minTemp}</td>
            </tr>
       
        </tbody>
      </table>
    </div>
  );
}

export default Max_getmeth;

// In this code, the condition temperature.
//maxTemp && is used to check if the maxTemp value exists before rendering the table row for that temperature.
// This ensures that only the temperatures with a valid maximum temperature are displayed.
// The table header (<thead>) is used to contain the column headings, and the table body (<tbody>) is used to contain the temperature data rows