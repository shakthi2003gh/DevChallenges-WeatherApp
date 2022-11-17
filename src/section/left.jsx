import { useContext, useEffect, useRef, useState } from "react";
import { WeatherContext } from "./../App";

const LeftSide = () => {
  const { weatherData, tempUnit, setLocation } = useContext(WeatherContext);
  const [searchMenu, setSearchMenu] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    setSuggestions(["chennai", "mumbai", "goa"]);
  }, []);

  const handleSearch = () => {
    const location = searchRef.current.value;
    setLocation(location);
    setSearchMenu(false);
    searchRef.current.value = "";

    !suggestions.includes(location) &&
      setSuggestions((prev) => [...prev, location]);
  };

  const handleSearchThis = (search) => {
    searchRef.current.value = search;

    handleSearch();
  };

  return (
    <div className="left">
      <div className="button-section">
        <button onClick={() => setSearchMenu(searchMenu ? false : true)}>
          Search for places
        </button>

        <span
          className="material-icons"
          title="current location feature currently not working"
        >
          my_location
        </span>
      </div>

      <img
        className="weather-icon"
        src={`/images/${
          (weatherData && weatherData[0].status) || "showers"
        }.png`}
        alt={(weatherData && weatherData[0].status) || "showers"}
      />

      <div className="temperture">
        {(weatherData && weatherData[0].maxtemp) || "15"}
        <span>{tempUnit === "C" ? "℃" : "℉"}</span>
      </div>

      <div className="status">
        {(weatherData && weatherData[0].status) || "shower"}
      </div>

      <div className="date">
        <span className="when">Today </span>•
        <span>{(weatherData && weatherData[0].date) || "Fri, 5 Jun"}</span>
      </div>

      <div className="location">
        <span className="material-icons">location_on</span>
        <span>{(weatherData && weatherData[0].location) || "Helsinki"}</span>
      </div>

      <div className={"search-section" + (searchMenu ? " show" : "")}>
        <span
          className="material-icons close"
          onClick={() => setSearchMenu(searchMenu ? false : true)}
        >
          close
        </span>

        <div className="search-group">
          <span className="material-icons search">search</span>
          <input type="text" placeholder="search location" ref={searchRef} />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="search-history">
          {suggestions.map((suggestion, index) => (
            <div key={index} onClick={() => handleSearchThis(suggestion)}>
              {suggestion} <span className="material-icons">navigate_next</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
