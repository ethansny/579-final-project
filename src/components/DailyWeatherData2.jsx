import DailyWeathBlock from "./utl/DailyWeatherBlock";




const DailyWeatherData2 = ({weatherParam, data}) => {
    return (
        <div className="p-2 bd-highlight d-flex flex-row align-items-center">
            <h5>{data}</h5>
            <div className="p-2 bd-highlight d-flex flex-row">{weatherParam}</div>
        </div>
    )
}

export default DailyWeatherData2;