import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const WeatherData = ({weatherData, resort}) => {
    const renderWeatherData = () => {
        return weatherData.time.map((day, index) => {
            const maxTemp = weatherData.temperature_2m_max[index];
            const minTemp = weatherData.temperature_2m_min[index];
            const showers = weatherData.showers_sum[index];
            const snowfall = weatherData.snowfall_sum[index];
            return (
                <Col key={day}>
                <Stack>
                    <div>{day}</div>
                    <div>{maxTemp}°C</div>
                    <div>{minTemp}°C</div>
                    <div>{snowfall}cm</div>
                </Stack>
                </Col>

            );
        });
    }
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