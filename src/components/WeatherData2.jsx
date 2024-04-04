import 'bootstrap/dist/css/bootstrap.css';
import DailyWeatherData from './DailyWeatherData';
import DailyWeatherData2 from './DailyWeatherData2';
const WeatherData = ({WeatherData}) => {

    return (
        <div>

            <div className="d-flex flex-column bd-highlight mb-3">
                <DailyWeatherData2 weatherParam={WeatherData} data="high"/>
            </div>
        </div>
    )
}

export default WeatherData;