import HighLightCard from "../compoents/highlightCard";
import WeatherCard from "./../compoents/weatherCard";

const Wrapper = ({ a, b }) => {
  return (
    <>
      <span>{a}</span>
      <span>{b}</span>
    </>
  );
};

const RightSide = () => {
  return (
    <div className="right">
      <div className="weather-section">
        {[...Array(5)].map((a, i) => (
          <WeatherCard
            key={i}
            when="today"
            status="HeavyRain"
            min="11°C"
            max="16°C"
          />
        ))}
      </div>

      <div className="highlights-section">
        <h1>Today's Hightlights </h1>

        {[...Array(4)].map((a, i) => (
          <HighLightCard
            key={i}
            title="Wind status"
            result={<Wrapper a="7" b="mph" />}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSide;
