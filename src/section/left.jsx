import { useEffect, useState } from "react";

const LeftSide = () => {
  const [searchMenu, setSearchMenu] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(["chennai", "india"]);
  }, []);

  return (
    <div className="left">
      <div className="button-section">
        <button onClick={() => setSearchMenu(searchMenu ? false : true)}>
          Seach for places
        </button>

        <span className="material-icons">my_location</span>
      </div>

      <img className="weather-icon" src="/images/Shower.png" alt="shower" />

      <div className="temperture">
        15<span>℃</span>
      </div>

      <div className="status">shower</div>

      <div className="date">
        <span className="when">Today </span>•<span>Fri, 5 Jun</span>
      </div>

      <div className="location">
        <span className="material-icons">location_on</span>
        <span>Helsinki</span>
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
          <input type="text" placeholder="search location" />
          <button>Search</button>
        </div>

        <div className="search-history">
          {suggestions.map((suggestion, index) => (
            <div key={index}>
              {suggestion} <span className="material-icons">navigate_next</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
