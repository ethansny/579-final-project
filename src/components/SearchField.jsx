import React, { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead';
import { ToggleButtonGroup, ToggleButton, Button, Modal } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

import WeatherData from './WeatherData';
import ErrorModal from './ErrorModal';

import resorts from "../assets/resorts.js";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const SearchField = () => {
  const endpointRoot = 'https://api.open-meteo.com/v1/forecast?'
  const defaultFilters = ['temperature_2m_max', 'temperature_2m_min', 'snowfall_sum']
  const possibleFilters = ['daylight_duration', 'wind_speed_10m_max', 'wind_gusts_10m_max']

  const [selectedResort, setSelectedResort] = useState(null);
  const [weatherData, setWeatherData] = useState(null)
  const [weatherFilters, setWeatherFilters] = useState(['temperature_2m_max', 'temperature_2m_min', 'snowfall_sum'])

  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  // This function was provided by React-Leaflet
  const LocationMarker = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click(e) {
        const wrappedLatLng = map.wrapLatLng(e.latlng);
        setPosition(wrappedLatLng)
        const lat = parseFloat(wrappedLatLng.lat).toFixed(2);
        let lng = parseFloat(wrappedLatLng.lng).toFixed(2);
        setSelectedResort([[lat, lng], "Selected Location"])
        setWeatherData(null)
      },
    })

    return position === null ? null : (
      <Marker position={position}>
        <Popup>{[lat, lng]}</Popup>
      </Marker>
    )
  }

  const getWeatherData = async () => {
    try {
      const filters = [...defaultFilters, ...weatherFilters];
      const filterString = filters.join(',');

      const response = await fetch(`${endpointRoot}latitude=${selectedResort[0][0]}&longitude=${selectedResort[0][1]},&daily=,${filterString}&timezone=America%2FNew_York`);
      if (!response.ok) throw new Error('API request failed');
  
      const data = await response.json();
      setWeatherData(data.daily);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Please select a location');
      setShowModal(true);
    }
  };

  const updateResort = (e) => {
    if (e.length === 0) return;
    let lat = parseFloat(e[0].latitude).toFixed(2);
    let lon = parseFloat(e[0].longitude).toFixed(2);
    setSelectedResort([[lat, lon], e[0].label])
  }

  return (
    <>
      <MapContainer maxBounds={[[-90, -180], [90, 180]]} worldCopyJump={true} center={[39.8283, -98.5795]} zoom={2} scrollWheelZoom={true} style={{ width: "70vw", height: "400px", border: "1px solid black" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedResort && (
          <Marker position={[selectedResort[0][0], selectedResort[0][1]]}>
            <Popup>
              <b>{selectedResort[1]}</b>
            </Popup>
          </Marker>
        )}
        <LocationMarker />
      </MapContainer>

      <div className="d-flex flex-row bd-highlight mb-3">
        <Typeahead
          className='searchBar'
          id="toggle-example"
          options={resorts}
          placeholder="Choose a resort..."
          selected={selectedResort ? [selectedResort[1]] : []}
          onChange={(e) => {
            if (e.length > 0) {
              updateResort(e);
            } else {
              setSelectedResort(null);
            }
            setWeatherData(null);
          }}
        />
      </div>

      <div className='buttons'>
        <button onClick={getWeatherData}>Get Weather Data</button>
        <ToggleButtonGroup type="checkbox" onChange={(newValues) => setWeatherFilters(newValues)}>
          {possibleFilters.map((filter, index) => <ToggleButton key={filter} id={`tbg-check-${index + 1}`} value={filter}>{filter}</ToggleButton>)}
        </ToggleButtonGroup>
      </div>

      <WeatherData weatherData={weatherData} resort={selectedResort} />
      <ErrorModal show={showModal} handleClose={() => setShowModal(false)} errorMessage={errorMessage} />
    </>
  )
}
export default SearchField;
