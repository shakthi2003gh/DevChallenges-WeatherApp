const WeatherCard = ({ when, status, min, max }) => {
  return (
    <div className="weather-card">
      <div className="when">{when}</div>

      <img
        className="weather-icon"
        src={`/images/${status}.png`}
        alt={status}
      />

      <div className="tempertures">
        <span>{max}</span>
        <span>{min}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
