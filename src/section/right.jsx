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
      <WeatherCard when="today" status="HeavyRain" min="11°C" max="16°C" />
      <HighLightCard title="Wind status" result={<Wrapper a="7" b="mph" />} />
    </div>
  );
};

export default RightSide;
