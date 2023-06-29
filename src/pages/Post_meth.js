import React, { useState } from 'react';

function Post_meth() {
  const [formData, setFormData] = useState({
    cityName: '',
    state: '',
    maxTemp: '',
    minTemp: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  
  async function submit() {

    const url = 'http://localhost:3006/temperatures/';
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

   await result.json();
  }

  return (
    <div>
      <h3 className='text-center'>ENTER THE CITY TEMPERATURE</h3> <br />
      <form className=''>
        <div className='col-sm-6 offset-sm-3'>
          <label>ENTER CITY</label>
          <input
            type='text'
            placeholder='CityName'
            onChange={handleChange}
            className='form-control bg-transparent'
            name='cityName'
          />
          <br />
          <label>ENTER STATE</label>
          <input
            type='text'
            placeholder='StateName'
            onChange={handleChange}
            className='form-control bg-transparent'
            name='state'
          />
          <br />
          <label>ENTER MAX TEMP</label>
          <input
            type='text'
            placeholder='MaxTemp'
            onChange={handleChange}
            className='form-control bg-transparent'
            name='maxTemp'
          />
          <br />
          <label>ENTER MIN TEMP</label>
          <input
            type='text'
            placeholder='MinTemp'
            onChange={handleChange}
            className='form-control bg-transparent'
            name='minTemp'
          />
          <br />
          <button onClick={submit} className='btn btn-success'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Post_meth;
