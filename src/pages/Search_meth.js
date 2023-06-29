import React, { useState, useEffect } from 'react';

function Search_meth() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3006/temperatures/");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    document.getElementById('tab').hidden=true;
  
  };
  function submit () {
    if(!searchTerm){
      document.getElementById('tab').hidden=true;
      alert('we are not fount this city');
    }else{
      document.getElementById('tab').hidden=false;

    }
  }

  const filteredData = data.filter(city =>
    city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <h3 className="text-center">SEARCH CITY </h3> <br />
      <input type="text" className='form-control bg-transparent' value={searchTerm} onChange={handleSearch} placeholder="...ENTER CITY NAME" /> <br />
      <button type="submit" className='btn btn-success' onClick={submit}>Search</button> <br />
      <table className='table table-bordered border border-black text-center' >
        <thead>
          <tr>
            <th>City Name</th>
            <th>State</th>
            <th>MaxTemp</th>
            <th>MinTemp</th>
          </tr>
        </thead>
        <tbody id='tab' hidden>
           {filteredData.map((city) => (
           <tr key={city.id}>
              <td>{city.cityName}</td>
              <td>{city.state}</td>
              <td>{city.maxTemp}</td>
              <td>{city.minTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search_meth;


/* The code you provided is a React component that implements a city search functionality. Here's a breakdown of how it works:

The component imports necessary dependencies from the 'react' package, including the useState and useEffect hooks.
The Search_meth component is defined as a function component.
Inside the component, two state variables are declared using the useState hook: data and searchTerm.
data is initialized as an empty array and will be used to store the fetched data.
searchTerm is initialized as an empty string and will be used to store the user's search input.
The useEffect hook is used to fetch data when the component mounts. It calls the fetchData function, which makes an asynchronous request to "http://localhost:3006/temperatures/" to retrieve temperature data.
The fetchData function uses the fetch function to make the HTTP request. Upon receiving the response, it extracts the JSON data and sets the data state variable using the setData function.
If an error occurs during the fetch request, it will be caught and logged to the console.
The handleSearch function is called whenever the user types into the search input field. It updates the searchTerm state variable with the current value of the input field.
The filteredData constant is declared using the data state variable and the filter array method. It filters the data array based on whether the city name (converted to lowercase) includes the searchTerm (also converted to lowercase).
The component's return statement contains the JSX markup.
It renders a heading, an input field for searching city names, and a table to display the filtered data.
The value attribute of the input field is bound to the searchTerm state variable, ensuring that the input field reflects the current value of searchTerm.
The onChange event of the input field is set to the handleSearch function, so that the searchTerm state variable is updated as the user types.
The table renders the filtered data using the map method on the filteredData array. Each city's information is displayed in a row with columns for city name, state, max temperature, and min temperature.
Overall, this component fetches temperature data from a specified API endpoint, allows the user to search for cities by name, and dynamically filters and displays the matching results in a table.

घटक 'प्रतिक्रिया' पॅकेजमधून आवश्यक अवलंबित्व आयात करतो, ज्यामध्ये useStateआणि useEffectहुक समाविष्ट आहेत.
घटक Search_methफंक्शन घटक म्हणून परिभाषित केला आहे.
घटकाच्या आत, useStateहुक वापरून दोन स्टेट व्हेरिएबल्स घोषित केले जातात: dataआणि searchTerm.
dataरिकाम्या अ‍ॅरे म्‍हणून आरंभ केला आहे आणि आणलेला डेटा संचयित करण्‍यासाठी वापरला जाईल.
searchTermरिकाम्या स्ट्रिंग म्हणून आरंभ केला जातो आणि वापरकर्त्याचे शोध इनपुट संचयित करण्यासाठी वापरला जाईल.
useEffectघटक माउंट केल्यावर हुक डेटा आणण्यासाठी वापरला जातो . हे फंक्शनला कॉल करते , जे तापमान डेटा पुनर्प्राप्त करण्यासाठी " http://localhost:3006/temperatures/ " fetchDataला असिंक्रोनस विनंती करते .
HTTP विनंती करण्यासाठी फंक्शन फंक्शन वापरते fetchData. fetchप्रतिसाद मिळाल्यावर, ते JSON डेटा काढते आणि फंक्शन dataवापरून स्टेट व्हेरिएबल सेट करते setData.
फेच विनंती दरम्यान त्रुटी आढळल्यास, ती पकडली जाईल आणि कन्सोलवर लॉग इन केली जाईल.
handleSearchजेव्हा वापरकर्ता शोध इनपुट फील्डमध्ये टाइप करतो तेव्हा फंक्शन कॉल केले जाते . हे searchTermइनपुट फील्डच्या वर्तमान मूल्यासह स्टेट व्हेरिएबल अपडेट करते.
स्टेट व्हेरिएबल आणि अॅरे पद्धत वापरून स्थिरांक filteredDataघोषित केला जातो . शहराचे नाव (लोअरकेसमध्ये रूपांतरित) मध्ये (लोअरकेसमध्ये रूपांतरित) समाविष्ट आहे की नाही यावर आधारित ते अॅरे फिल्टर करते .datafilterdatasearchTerm
घटकाच्या रिटर्न स्टेटमेंटमध्ये JSX मार्कअप असतो.
हे शीर्षक, शहरांची नावे शोधण्यासाठी इनपुट फील्ड आणि फिल्टर केलेला डेटा प्रदर्शित करण्यासाठी एक सारणी रेंडर करते.
valueइनपुट फील्डची विशेषता स्टेट व्हेरिएबलशी बांधील आहे , searchTermयाची खात्री करून की इनपुट फील्ड ची वर्तमान मूल्य प्रतिबिंबित करते searchTerm.
onChangeइनपुट फील्डची घटना फंक्शनवर सेट केली जाते , handleSearchजेणेकरून searchTermस्टेट व्हेरिएबल वापरकर्त्याच्या प्रकारानुसार अपडेट केले जाईल.
सारणी mapअॅरेवरील पद्धत वापरून फिल्टर केलेला डेटा रेंडर करते filteredData. प्रत्येक शहराची माहिती शहराचे नाव, राज्य, कमाल तापमान आणि किमान तापमानासाठी स्तंभांसह एका ओळीत प्रदर्शित केली जाते.
एकंदरीत, हा घटक निर्दिष्ट API एंडपॉईंटवरून तापमान डेटा आणतो, वापरकर्त्याला नावानुसार शहरे शोधण्याची परवानगी देतो आणि डायनॅमिकली फिल्टर करतो आणि जुळणारे परिणाम टेबलमध्ये प्रदर्शित करतो.


*/