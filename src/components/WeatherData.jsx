import 'bootstrap/dist/css/bootstrap.css';
import DailyWeatherData from './DailyWeatherData';
import DailyWeatherData2 from './DailyWeatherData2';
const WeatherData = ({maxTemp, minTemp, showers, snowfall}) => {

    return (
        <div>

            <div className="d-flex flex-column bd-highlight mb-3">
                <DailyWeatherData weatherParam={maxTemp} data="High"/>
                <DailyWeatherData weatherParam={minTemp} data="Low"/>
                <DailyWeatherData weatherParam={showers} data="Showers"/>
                <DailyWeatherData weatherParam={snowfall} data="Snowfall" />
                <DailyWeatherData2 weatherParam={maxTemp} data="High"/>
            </div>
        </div>
    )
}

export default WeatherData;