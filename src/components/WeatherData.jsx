import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const WeatherData = ({weatherData, resort}) => {

    // const renderWeatherData = () => {
    //     return weatherData.time.map((day, index) => {
    //         const maxTemp = weatherData.temperature_2m_max[index];
    //         const minTemp = weatherData.temperature_2m_min[index];
    //         const snowfall = weatherData.snowfall_sum[index];
    //         return (
    //             <Col key={day}>
    //             <Stack>
    //                 <div>{day}</div>
    //                 <div>Hi: {maxTemp}°C</div>
    //                 <div>Low: {minTemp}°C</div>
    //                 <div>Snow: {snowfall}cm</div>
    //             </Stack>
    //             </Col>

    //         );
    //     });
    // }
    const renderWeatherData = () => {
  return weatherData.time.map((day, index) => {
    return (
      <Col key={day}>
        <Stack>
          <div>{day}</div>
          {Object.keys(weatherData).map((key) => {
            if (key !== 'time') {
              return <div key={key}>{`${key}: ${weatherData[key][index]}`}</div>;
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
          <Container>
          <Row>
            {weatherData ? renderWeatherData() : null}
            </Row>
          </Container>

        </div>
      );
}

export default WeatherData;