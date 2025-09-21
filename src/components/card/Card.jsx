import "./card.css";
import SvgDown from "./icons/Down";
import SvgUp from "./icons/Up";
import { useNavigate } from "react-router-dom";

function Card({ title, value, change, className = "", link }) {
  const isNegative = change.includes("-");
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className={`card ${className}`}
      onClick={handleClick}
      style={{ cursor: link ? "pointer" : "default" }}
    >
      <h3 className="card-title">{title}</h3>

      <div className="card-data">
        <h2 className="value">{value}</h2>
        <span className={`change ${isNegative ? "down" : "up"}`}>
          {change} {isNegative ? <SvgDown className="icon-set" /> : <SvgUp />}
        </span>
      </div>
    </div>
  );
}

export default Card;
