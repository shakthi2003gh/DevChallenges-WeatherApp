import WeatherCard from "./../compoents/weatherCard";

const RightSide = () => {
  return (
    <div className="right">
      <WeatherCard when="today" status="HeavyRain" min="11°C" max="16°C" />
    </div>
  );
};

export default RightSide;
