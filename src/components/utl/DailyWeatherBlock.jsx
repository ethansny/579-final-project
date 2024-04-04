

const DailyWeathBlock = ({ value, index }) => {

  return (
    <div index={index} className="daily-weather-block">
      <p>date</p>
      {/* <img src={icon} alt="weather-icon" /> */}
      <p>{value}</p>
      <p>weather type</p>
    </div>
  );
}

export default DailyWeathBlock;