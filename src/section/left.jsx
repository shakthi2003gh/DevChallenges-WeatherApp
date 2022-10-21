const LeftSide = () => {
  return (
    <div className="left">
      <div className="button-section"></div>

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
    </div>
  );
};

export default LeftSide;
