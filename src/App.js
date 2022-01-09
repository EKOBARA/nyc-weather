import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';

import axios from 'axios';

import './App.css';
import Forecast from './components/Forecast/Forecast';

function App() {
  const [zip, setZip] = useState('');
  const [data, setData] = useState([]);

  const apiUrl = (zip) => {
    return `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${process.env.REACT_APP_API_KEY}`;
  }

  
  const getWeather = async () => {
    try {
      const res = await axios.get(apiUrl(zip));
      const data = res.data.list;

      console.log(data)
      const dataArr = data.filter((_, idx) => idx % 8 === 0).map((d) => {
				const { dt_txt, main, weather } = d;

				const icon = weather[0].icon.slice(0, -1);
				const min = main.temp_min.toFixed();
				const max = main.temp_max.toFixed();
				const date = new Date(dt_txt).toLocaleDateString('en-US',{ weekday: 'short' });

				return { date, max, min, icon };
			});
      console.log(dataArr);
      setData(dataArr);
    } catch (error) {
      console.log(error);
    }
  }
    


  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  } 

  return (
    <div className="App">
      <SearchForm 
        zip={zip}
        setZip={setZip}
        handleSubmit={handleSubmit}
      />
      <Forecast data={data}/>
    </div>
  );
}

export default App;
