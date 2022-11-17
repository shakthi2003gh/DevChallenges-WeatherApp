import { createContext, useEffect, useState } from "react";
import LeftSide from "./section/left";
import RightSide from "./section/right";
import { getWeather } from "./httpServices/weatherApi";

export const WeatherContext = createContext();

function App() {
  const [location, setLocation] = useState("chennai");
  const [weatherData, setWeatherData] = useState();
  const [tempUnit, setTempUnit] = useState("C");

  const value = { weatherData, tempUnit, setTempUnit, setLocation };

  useEffect(() => {
    const setData = async () => {
      const w = await getWeather(tempUnit, location);
      setWeatherData(w);
    };

    setData();
  }, [tempUnit, location]);

  useEffect(() => {}, []);

  return (
    <WeatherContext.Provider value={value}>
      <LeftSide />
      <RightSide />
    </WeatherContext.Provider>
  );
}

export default App;
