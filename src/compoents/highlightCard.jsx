const HighLightCard = ({ title, result, other }) => {
  return (
    <div className="highLight-card">
      <div className="title">{title}</div>
      <div className="result">{result}</div>
      {other && <div className="other">{other}</div>}
    </div>
  );
};

export default HighLightCard;
