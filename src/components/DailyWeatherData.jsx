import DailyWeathBlock from "./utl/DailyWeatherBlock";




const DailyWeatherData = ({maxTemp, minTemp, showers, snowfall}) => {
    console.log(weatherParam)
    return (
        <div className="p-2 bd-highlight d-flex flex-row align-items-center">
            <h5>{data}</h5>
            <div className="p-2 bd-highlight d-flex flex-row">{weatherParam.map((value, index) => <DailyWeathBlock value={value} index={index}/>)}</div>
        </div>
    )
}

export default DailyWeatherData;