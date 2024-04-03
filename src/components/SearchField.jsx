import React from 'react'
import { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead';
import WeatherData from './WeatherData';
import options from "/579-final-project/src/assets/data.js";


import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const filterBy = (option, resort) => {
    if (resort.selected.length) {
      return true;
    }
    return option.label.toLowerCase().indexOf(resort.text.toLowerCase()) > -1;
  }

const ToggleButton = ({ isOpen, onClick }) => (
  <button
      className="toggle-button"
      onClick={onClick}
      onMouseDown={(e) => {
      // Prevent input from losing focus.
      e.preventDefault();
      }}>
      {isOpen ? '▲' : '▼'}
  </button>
);

const SearchField = () => {

  const [selectedResort, setSelectedResort] = useState([]);
  const [maxTemp, setMaxTemp] = useState([])
  const [minTemp, setMinTemp] = useState([])
  const [showers, setShowers] = useState([])
  const [snowfall, setSnowfall] = useState([])
  const endpointRoot = 'https://api.open-meteo.com/v1/forecast?'

  const  getWeatherData = async  () => {
    const response = await fetch(`${endpointRoot}latitude=${selectedResort[0]}&longitude=${selectedResort[1]}&daily=temperature_2m_max,temperature_2m_min,showers_sum,snowfall_sum&timezone=America%2FNew_York`)
    const data = await response.json()
    // console.log(data.daily)
    // console.log(data.daily.temperature_2m_max.length)
    setMaxTemp(data.daily.temperature_2m_max)
    setMinTemp(data.daily.temperature_2m_min)
    setShowers(data.daily.showers_sum)
    setSnowfall(data.daily.snowfall_sum)
    console.log(data.daily)
  }

  const updateResort = (e) => {
    if (e.length === 0) {
      return
    }
    let lat = parseFloat(e[0].latitude).toFixed(2);
    let lon = parseFloat(e[0].longitude).toFixed(2);
    setSelectedResort([lat, lon])
    console.log(selectedResort)
  }

    return (
        <>
        <div className="d-flex flex-row bd-highlight mb-3">
        <Typeahead
            filterBy={filterBy}
            id="toggle-example"
            options={options}
            placeholder="Choose a resort..."
            onChange={(e) => updateResort(e)}
          />
          <button onClick={getWeatherData}>Submit</button>
          </div>
        <WeatherData maxTemp={maxTemp} minTemp={minTemp} showers={showers} snowfall={snowfall}/>
        </>
    )
    }
  export default SearchField;