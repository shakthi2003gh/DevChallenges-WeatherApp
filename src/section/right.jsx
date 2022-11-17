import HighLightCard from "../compoents/highlightCard";
import WeatherCard from "./../compoents/weatherCard";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./../App";

const Wrapper = ({ a, b }) => {
  return (
    <>
      <span>{a}</span>
      <span>{b}</span>
    </>
  );
};

const ProcessBar = ({ width }) => {
  return (
    <div className="process-bar" style={{ "--width": width }}>
      <span>0</span>
      <span>50</span>
      <span>100</span>
      <span>%</span>
    </div>
  );
};

const WindDirection = ({ direction }) => {
  return (
    <div className="wind-direction" style={{ "--direction": direction }}>
      <span className="material-icons">arrow_circle_right</span>
      <span>WSW</span>
    </div>
  );
};

const RightSide = () => {
  const { weatherData, tempUnit, setTempUnit } = useContext(WeatherContext);
  const [highLights, setHighlights] = useState([]);

  useEffect(() => {
    const today = weatherData && weatherData[0];

    if (!today) return;

    const highlightData = [
      {
        title: "Wind status",
        status: today.windSpeed,
        unit: "mph",
        windDirection: Math.floor(today.windDir) + "deg",
      },
      {
        title: "Humidity",
        status: today.humidity,
        unit: "%",
        processBar: Math.floor(today.humidity) + "%",
      },
      { title: "Visibility", status: today.visibility, unit: " miles" },
      { title: "Air Pressure", status: today.airPressure, unit: " mb" },
    ];

    setHighlights(highlightData);
  }, [weatherData]);

  return (
    <div className="right">
      <div className="temperture-btns">
        <button
          className={tempUnit === "C" ? "active" : ""}
          onClick={() => setTempUnit("C")}
        >
          ℃
        </button>
        <button
          className={tempUnit === "F" ? "active" : ""}
          onClick={() => setTempUnit("F")}
        >
          ℉
        </button>
      </div>

      <div className="weather-section">
        {weatherData &&
          weatherData
            .filter((w, i) => w && ![0, 6, 7].includes(i))
            .map((w, i) => (
              <WeatherCard
                key={i}
                when={i === 0 ? "Tommorow" : (w && w.date) || "today"}
                status={(w && w.status) || "HeavyRain"}
                min={(w && w.mintemp + "°" + tempUnit) || "11°C"}
                max={(w && w.maxtemp) + "°" + tempUnit || "16°C"}
              />
            ))}
      </div>

      <div className="highlights-section">
        <h1>Today's Hightlights </h1>

        {highLights.map((w, i) => (
          <HighLightCard
            key={i}
            title={w.title}
            result={<Wrapper a={w.status} b={w.unit} />}
            other={
              (w.processBar && <ProcessBar width={w.processBar} />) ||
              (w.windDirection && <WindDirection direction={w.windDirection} />)
            }
          />
        ))}
      </div>

      <p className="create-by">
        created by{" "}
        <a href="https://github.com/shakthi2003gh" title="Github">
          Shakthi
        </a>{" "}
        - devChallenges.io
      </p>
    </div>
  );
};

export default RightSide;
