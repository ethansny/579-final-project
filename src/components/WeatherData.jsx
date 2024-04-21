import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const WeatherData = ({ weatherData, resort }) => {

  const keyToLabel = {
    temperature_2m_max: 'High',
    temperature_2m_min: 'Low',
    snowfall_sum: 'Total Snow',
    daylight_duration: 'Daylight',
    wind_speed_10m_max: 'Wind Speed',
    wind_gusts_10m_max: 'Wind Gusts',
  };

  const formatValue = (key, value) => {
    if (key === 'temperature_2m_max' || key === 'temperature_2m_min') {
      return `${value}°C`;
    } else if (key === 'daylight_duration') {
      return `${(value / 3600).toFixed(2)} hrs`;
    } else if (key === 'wind_speed_10m_max' || key === 'wind_gusts_10m_max') {
      return `${value} km/hr`;
    } else if (key === 'snowfall_sum') {
      return `${value} cm`;
    }
    return value;
  };

  const renderWeatherData = () => {
    return weatherData.time.map((day, index) => {
      return (
        <Col key={day}>
          <Stack>
            <div>{day}</div>
            {Object.keys(weatherData).map((key) => {
              if (key !== 'time') {
                const label = keyToLabel[key] || key;
                const value = formatValue(key, weatherData[key][index]);
                return <p key={key}>{`${label}: ${value}`}</p>;
              }
              return null;
            })}
          </Stack>
        </Col>
      );
    });
  };
  return (
    <div>
      <h2>Weather Forecast for {resort ? resort[1] : null}</h2>
      <Container className='weatherContainer'>
        <Row>
          {weatherData ? renderWeatherData() : "Awaiting data..."}
        </Row>
      </Container>

    </div>
  );
}

export default WeatherData;